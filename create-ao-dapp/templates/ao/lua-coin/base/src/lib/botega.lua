local bint = require(".bint")(4096) -- gives us 1234 digits for safe power calculations and fractionalizing
local mod  = {}

---Called once the curve target is hit
---A Botega amm is created and liquidity is provided such that
---CurveReserve is used entirely
---issued token amoount is chosen such that marginal AMM price is initially == CurvePrice
function mod.migration()
    -- CREATE POOL

    ao.send({
        Target = BOTEGA_FACTORY_PROCESS,
        Action = "Add-Pool",
        Tags = {
            ["Token-A"] = ISSUED_TOKEN_PROCESS,
            ["Token-B"] = QUOTE_TOKEN_PROCESS,
        }
    })

    local confirmation = Receive(function(m)
        return m.Tags.Action == 'Add-Pool-Confirmation'
            and m.Tags["From-Process"] == BOTEGA_FACTORY_PROCESS
    end)

    BotegaAmmProcess = confirmation.Tags["Pool-Id"]

    -- PROVIDE LIQUIDITY

    local curvePrice = Calc.price(CurveSupply)
    -- use all accumulated reserve
    local quoteTokenQty = CurveReserve

    --[[
      marginalAmmPrice = quoteTokenQty / issuedTokenQty
      => issuedTokenQty = quoteTokenQty / marginalAmmPrice

      We want the new marginal amm price to be == (curvePrice)
          => issuedTokenQty = quoteTokenQty / (curvePrice)
      also, curvePrice includes 18 digits of precision scaling
  ]]
    local issuedTokenQty = bint.udiv(
        quoteTokenQty * Calc.PRICE_PRECISION,
        curvePrice
    )
    assert(bint.ule(issuedTokenQty, AvailableForSupply),
        "Internal: Botega migration --- insufficient curve tokens to match accumulated reserve --- Have: " ..
        tostring(AvailableForSupply) .. " - Need: " .. tostring(issuedTokenQty))

    -- receive the LP tokens credit notice
    local lpTokensCreditNotice = mod.provideLiquidity(quoteTokenQty, issuedTokenQty) -- awaits the confirmation

    CurveReserve = CurveReserve - quoteTokenQty
    AvailableForSupply = AvailableForSupply - issuedTokenQty
    MigrationSupply = issuedTokenQty

    -- ! not updating CurveSupply since this is not necessarily adding to the circulating supply of the issued tokens
    -- it depends on how you want to define the issued token's official total supply

    -- BURN & COLLECT LIQUIDITY TOKENS

    mod.manageLPTokens(lpTokensCreditNotice)

    -- BURN THE REMAINING un-issued SUPPLY

    ao.send({
        Target = ISSUED_TOKEN_PROCESS,
        Action = "Transfer",
        Recipient = "0000000000000000000000000000000000000000000",
        Quantity = tostring(AvailableForSupply),
        ["X-Action"] = "Post-Botega-Migration-Burn"
    })

    -- WRAP UP

    IsMigrating = false
    HasMigrated = true
end

function mod.provideLiquidity(quoteTokenQty, issuedTokenQty)
    ao.send({
        Target = ISSUED_TOKEN_PROCESS,
        Action = "Transfer",
        Recipient = BotegaAmmProcess,
        Quantity = tostring(issuedTokenQty),
        ["X-Action"] = "Provide",
        ["X-Slippage-Tolerance"] = "0.5"
    })

    ao.send({
        Target = QUOTE_TOKEN_PROCESS,
        Action = "Transfer",
        Recipient = BotegaAmmProcess,
        Quantity = tostring(quoteTokenQty),
        ["X-Action"] = "Provide",
        ["X-Slippage-Tolerance"] = "0.5"
    })

    -- return the received the LP tokens credit notice
    return Receive(function(m)
        return m.Tags.Action == "Credit-Notice"
            and m.Tags["From-Process"] == BotegaAmmProcess
    end)
end

function mod.manageLPTokens(lpTokensCreditNotice)
    local lpTokensQty = bint(lpTokensCreditNotice.Tags.Quantity)

    local toBurn = bint.udiv(lpTokensQty * LP_TOKENS_TO_BURN, 10000)

    ao.send({
        Target = BotegaAmmProcess,
        Action = "Transfer",
        Recipient = BURNER_PROCESS,
        Quantity = tostring(toBurn)
    })

    local toKeep = lpTokensQty - toBurn

    ao.send({
        Target = BotegaAmmProcess,
        Action = "Transfer",
        Recipient = DEV_ACCOUNT,
        Quantity = tostring(toKeep)
    })
end

return mod
