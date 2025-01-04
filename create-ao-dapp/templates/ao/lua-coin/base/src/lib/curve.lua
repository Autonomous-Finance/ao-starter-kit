local json              = require("json")
local mod               = {}

-- json encoding of data
mod.sendReply           = function(msg, tags, data)
    msg.reply({
        Action = "Resp-" .. msg.Tags.Action,
        Tags = tags,
        Data = json.encode(data)
    })
end

-- no json encoding of data
mod.sendReplyRaw        = function(msg, tags, data)
    msg.reply({
        Action = "Resp-" .. msg.Tags.Action,
        Tags = tags,
        Data = data
    })
end

mod.handleInfo          = function(msg)
    local tags = {
        -- config
        ["Reserve-Token-Process"] = QUOTE_TOKEN_PROCESS,
        ["Reserve-Token-Denomination"] = tostring(QUOTE_TOKEN_DENOMINATION),
        ["Issued-Token-Process"] = ISSUED_TOKEN_PROCESS,
        ["Issued-Token-Denomination"] = tostring(ISSUED_TOKEN_DENOMINATION),

        ["Target-Curve-Supply"] = tostring(TargetSupply),
        ["Target-Curve-Reserve"] = tostring(TargetLiquidity),
        ["Target-Curve-Price"] = tostring(TargetPrice),
        ["Target-Curve-Market-Cap"] = tostring(TargetMarketCap),

        ["Curve-M"] = tostring(CurveM),
        ["Curve-RR"] = tostring(CurveRR),
        ["Curve-N"] = tostring(CurveN),

        ["Curve-Fee"] = tostring(CurveFee),

        ["Botega-Factory-Process"] = BOTEGA_FACTORY_PROCESS,
        ["Burner-Process"] = BURNER_PROCESS,
        ["Developer-Account"] = DEV_ACCOUNT,

        -- state
        ["Is-Initialized"] = tostring(IsInitialized),
        ["Curve-Supply"] = tostring(CurveSupply),
        ["Available-For-Supply"] = tostring(AvailableForSupply),

        ["Curve-Reserve"] = tostring(CurveReserve),

        ["Curve-Price"] = tostring(Calc.price(CurveSupply)),

        ["Fees-Collected"] = tostring(FeesCollected),

        ["LP-Tokens-Burn-Ratio"] = tostring(LP_TOKENS_TO_BURN),
        ["Is-Migrating"] = tostring(IsMigrating),
        ["Has-Migrated"] = tostring(HasMigrated),
        ["Botega-AMM-Process"] = BotegaAmmProcess or nil,
        ["Migration-Supply"] = MigrationSupply and tostring(MigrationSupply) or nil,
    }
    return mod.sendReply(msg, tags, {})
end

mod.handleInitialize    = function(msg)
    if IsInitialized then
        return
    end

    local amount = msg.Tags["Quantity"]

    -- ... optional checks
    -- ensure that the received amount is the token's total supply
    -- ensure that the received amount is enough to :
    -- 1. reach curve target
    -- 2. provide enough liquidity on botega migration

    IsInitialized = true
    AvailableForSupply = bint(amount)
end

---Get the expected output for a BUY FROM THE CURVE
---output quantity (issued token) obtained for
---paying a given input quantity (quote token)
mod.handleGetBuyOutput  = function(msg)
    local reason = mod.checkCannotTrade()
    if reason then
        mod.sendReply(msg, { ["Error"] = reason }, "")
        return
    end

    local amount = msg.Tags["Quantity"]
    assert(amount, "'Quantity' is required")

    local inputQty = bint(amount)
    local netInputQty, feeTaken = Calc.deductFee(inputQty)

    local outputQty = Calc.getOutputForBuy(netInputQty)

    local newCurvePrice = Calc.price(CurveSupply + outputQty)
    local effectiveTradePrice = Calc.getEffectivePrice(inputQty, outputQty)
    local tags = {
        ["Output-Quantity"] = tostring(outputQty),
        ["Fee-Taken"] = tostring(feeTaken),
        ["New-Curve-Price"] = tostring(newCurvePrice),
        ["Effective-Trade-Price"] = tostring(effectiveTradePrice)
    }
    local data = {}
    mod.sendReply(msg, tags, data)
end

---BUY FROM THE CURVE
---Can only be performed after initialization and before migrating to botega
---Will partially refund if full paid amount leads to an overshooting
---of the reserve target / supply target
---If the buy leads to the mod target being reached, a migration to
---Botega is triggered
mod.handleBuyFromCurve  = function(msg)
    local refundReason = mod.checkCannotTrade()
    if refundReason then
        ao.send({
            Target = QUOTE_TOKEN_PROCESS,
            Action = "Transfer",
            Recipient = msg.Tags.Sender,
            Quantity = msg.Tags.Quantity,
            ["X-Refund-Reason"] = refundReason
        })
        return
    end

    local amount = msg.Tags["Quantity"]
    assert(amount, "'Quantity' is required")

    local inputQty = bint(amount)
    local netInputQty, feeTaken = Calc.deductFee(inputQty)

    -- Ensure we don't overshoot the curve target for the Botega migration
    local missingReserve = TargetLiquidity - CurveReserve

    if netInputQty > missingReserve then
        -- split the inputQty
        -- we need to choose an input quantity so that
        -- netInputQty brings us above the target mp3Coin supply
        -- while remaining as close as possible to it
        -- adding 1 to account for precision loss in bigint arithmetic
        --    => we end up slightly above the target
        netInputQty = missingReserve + 1
        local toUseNow = Calc.addFee(netInputQty)
        feeTaken = toUseNow - netInputQty
        local toRefund = inputQty - toUseNow

        ao.send({
            Target = QUOTE_TOKEN_PROCESS,
            Action = "Transfer",
            Recipient = msg.Tags.Sender,
            Quantity = tostring(toRefund),
            ["X-Refund-Reason"] = [[
              The bonding curve is reaching its target supply due to your buy.
              You are being partially refunded because only part of your input amount can be used at this point.
          ]]
        })
    end

    local outputQty = Calc.getOutputForBuy(netInputQty)

    -- ensure that amounts are available (calculations are correct)
    assert(bint.ule(feeTaken, inputQty), "calculated buy fee exceeds buy input quantity")
    assert(bint.ule(outputQty, AvailableForSupply), "buy output exceeds available amount of token to be issued")

    CurveReserve = CurveReserve + netInputQty
    CurveSupply = CurveSupply + outputQty
    AvailableForSupply = AvailableForSupply - outputQty

    -- transfer fee out
    mod.sendTradingFees(feeTaken, msg.Id)

    -- pay buyer
    ao.send({
        Target = ISSUED_TOKEN_PROCESS,
        Action = "Transfer",
        Recipient = msg.Tags.Sender,
        Quantity = tostring(outputQty),
        ["X-Action"] = "Bonding-Curve-Buy-Output"
    })


    -- ... optionally record buy event

    -- check if we need to migration to Botega
    local hasReachedTarget = bint.ule(TargetLiquidity, CurveReserve)

    if hasReachedTarget then
        IsMigrating = true
        Botega.migration()
    end
end

---Get the expected output for a SELL TO THE CURVE
---output quantity (quote token) obtained for
---paying a given input quantity (issued token)
mod.handleGetSellOutput = function(msg)
    local reason = mod.checkCannotTrade()
    if reason then
        mod.sendReply(msg, { ["Error"] = reason }, "")
        return
    end

    local amount = msg.Tags["Quantity"]
    assert(amount, "'Quantity' is required")

    local inputQty = bint(amount)
    local outputQty = Calc.getOutputForSell(inputQty)

    local netOutputQty, feeTaken = Calc.deductFee(outputQty)

    local newCurvePrice = Calc.price(CurveSupply - outputQty)
    local effectiveTradePrice = Calc.getEffectivePrice(inputQty, netOutputQty)
    local tags = {
        ["Output-Quantity"] = tostring(netOutputQty),
        ["Fee-Taken"] = tostring(feeTaken),
        ["New-Curve-Price"] = tostring(newCurvePrice),
        ["Effective-Trade-Price"] = tostring(effectiveTradePrice)
    }
    local data = {}
    mod.sendReply(msg, tags, data)
end

---SELL TO THE CURVE
---Can only be performed after initialization and before migrating to botega
mod.handleSellToCurve   = function(msg)
    local refundReason = mod.checkCannotTrade()
    if refundReason then
        ao.send({
            Target = ISSUED_TOKEN_PROCESS,
            Action = "Transfer",
            Recipient = msg.Tags.Sender,
            Quantity = msg.Tags.Quantity,
            ["X-Refund-Reason"] = refundReason
        })
        return
    end

    local amount = msg.Tags["Quantity"]
    assert(amount, "'Quantity' is required")

    local inputQty = bint(amount)
    local outputQty = Calc.getOutputForSell(inputQty)

    local netOutputQty, feeTaken = Calc.deductFee(outputQty)

    -- ensure that amounts are available (calculations are correct)
    assert(bint.ule(inputQty, CurveSupply), "sell input exceeds official curve supply in circulation")
    assert(bint.ule(outputQty, CurveReserve), "sell output exceeds available amount of token to be issued")
    assert(bint.ule(feeTaken, outputQty), "calculated sell fee exceeds sell output quantity")

    CurveReserve = CurveReserve - outputQty
    CurveSupply = CurveSupply - inputQty
    AvailableForSupply = AvailableForSupply + inputQty

    -- transfer fee out
    mod.sendTradingFees(feeTaken, msg.Id)

    -- pay seller
    ao.send({
        Target = QUOTE_TOKEN_PROCESS,
        Action = "Transfer",
        Recipient = msg.Tags.Sender,
        Quantity = tostring(netOutputQty),
        ["X-Action"] = "Bonding-Curve-Sell-Output"
    })

    -- ... optionally record sell event
end


---Send quote token quantity to dev account
---Can only be performed before migrating to botega
mod.sendTradingFees = function(qty, triggerId)
    FeesCollected = FeesCollected + qty
    ao.send({
        Target = QUOTE_TOKEN_PROCESS,
        Action = "Transfer",
        Recipient = DEV_ACCOUNT,
        Quantity = tostring(qty),
        ["Trigger-Message-Id"] = triggerId
    })
end

---Check if the curve is in a suitable state for trading (initialized, not migrating, not migrated)
---@return string | nil reason - A reason if the state is not suitable for trading, nil otherwise
mod.checkCannotTrade = function()
    if not IsInitialized then
        return
        'The bonding curve is not initialized yet. Initialize the curve by transferring to it all the token supply that it should manage (distribute + migrate to Botega)'
    elseif IsMigrating or HasMigrated then
        return 'The bonding curve is no longer accepting buys due to the target supply being reached.'
    end

    return nil
end

return mod
