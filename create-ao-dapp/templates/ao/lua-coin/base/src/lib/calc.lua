local bint = require(".bint")(4096) -- gives us 1234 digits for safe power calculations and fractionalizing

local mod = {}


mod.FRACTIONAL_PRECISION   = 160 -- ! see scaleCurveM() for why this precision scaling needs to be so high
mod.PRICE_PRECISION        = bint.ipow(10, 18)

---The curve configuration that can be mathematically derived
---from the frontend-provided configuration
mod.curveDerivedConfig     = function()
    local n = 1 / CurveRR - 1
    local targetPrice = bint.udiv(TargetMarketCap * mod.PRICE_PRECISION, TargetSupply)
    local targetLiquidity = bint.udiv(TargetMarketCap * math.floor(CurveRR * 10000), 10000)
    return {
        n = n,
        targetPrice = targetPrice,
        targetLiquidity = targetLiquidity
    }
end

---scale the curve's m constant, initially calculated by the UI,
---considering, that the UI config is denomination agnostic
mod.scaleCurveM            = function(initialM)
    ---the curveM from UI config is at least 1e-40, based on the curve target values and the RR configuration

    ---here we scale curveM by an order of magnitude of 18 * 6.66 - 12 in the worst case, which means ~ 10^108

    ---combined, we have the requirement of
    ---  curveM > 1e-148
    --- ! => we account for this when fractionalizing floats in curve calculation
    --- Safer to add 10 more orders of magnitude, i.e. 10 ^ 160
    --- => our fractionalization will use a scaling of this magnitude in order to maintain precision

    local magnitude = ISSUED_TOKEN_DENOMINATION * (CurveN + 1) - QUOTE_TOKEN_DENOMINATION
    return initialM / 10 ^ (magnitude)
end

---Amount of reserves (quote token) required to be paid into the curve
---in order for it to issue given supply (issued token)
---@param supply bint
---@return bint
mod.cost                   = function(supply)
    --[[
    Formula
    cost(supply) = (m / (n + 1)) * supply ^ (n + 1)

    We must operate on bints => conversions and bint arithmetic are required

    We convert as late as possible (only to work on what can not be computed with floating point arithmetic)
  ]]
    local n = CurveN
    local m = CurveM

    -- Naming (m / (n+1)) as "left" and supply ^ (n+1) as "power"

    local numLeft, denLeft = mod.bintFraction(m / (n + 1), mod.FRACTIONAL_PRECISION)
    -- use the fact that n + 1 == RR
    local numPower = mod.bintExpInvRR(supply)

    return bint.udiv(
        numLeft * numPower,
        denLeft
    )
end

---Continuous price reached by the curve given a supply of issued token
---
--- Formula
--- price(S) = m * supply ^ n
---
---@param supply bint
---@return bint
mod.price                  = function(supply)
    local m = CurveM

    local numM, denM = mod.bintFraction(m, mod.FRACTIONAL_PRECISION)
    -- Naming supply ^ n as "power"
    local numPower = mod.bintExpCurveN(supply)

    return bint.udiv(
        numM * numPower * mod.PRICE_PRECISION,
        denM
    )
end

---Supply that is reached via a given amount of reserves being accumulated
---
--- Formula
--- supplyForCost(cost) = (((n+1) * cost) / m) ^ (1 / (n+1))
---
---@param cost bint
---@return bint
mod.supplyForCost          = function(cost)
    local n = CurveN
    local m = CurveM

    --[[
    We need base ^ exp with
    base = ((n + 1) * cost) / m
    exp = 1 / (n+1) = RR

    1. Calculate base with integer arithmetic
    2. Exponentiate ^ RR with integer arithmetic
  ]]

    -- 1.
    local floatFactor = (n + 1) / m
    local num1, den1 = mod.bintFraction(floatFactor, mod.FRACTIONAL_PRECISION)

    local base = bint.udiv(
        num1 * cost,
        den1
    )

    -- 2.
    return mod.bintExpRR(base)
end

---@param amount bint
---@return bint, bint
mod.deductFee              = function(amount)
    local fee = bint.udiv(amount * CurveFee, 10000)
    return amount - fee, fee
end

---Inverse operation of taking a trading fee from an amount
---@param amountWithoutFee bint
mod.addFee                 = function(amountWithoutFee)
    return bint.udiv(
        amountWithoutFee * 10000,
        10000 - CurveFee
    )
end

---Calculate the issued token output obtained when
---buying from the curve while paying given quote token amount
---@param inputQty bint
---@return bint
mod.getOutputForBuy        = function(inputQty)
    local reserveBeforeBuy = CurveReserve
    local reserveAfterBuy = reserveBeforeBuy + inputQty
    local supplyAfterBuy = mod.supplyForCost(reserveAfterBuy)
    local supplyBeforeBuy = CurveSupply
    return supplyAfterBuy - supplyBeforeBuy
end

---Calculate the quote token output obtained when
---selling to the curve while paying given issued token amount
---@param inputQty bint
---@return bint
mod.getOutputForSell       = function(inputQty)
    local reserveBeforeSell = CurveReserve
    local supplyBeforeSell = CurveSupply
    local supplyAfterSell = supplyBeforeSell - inputQty
    local reserveAfterSell = mod.cost(supplyAfterSell)
    return reserveBeforeSell - reserveAfterSell
end

-- Calculate effective price of a trade
---@param inputQty bint
---@param outputQty bint
---@return bint price scaled with 10^18
mod.getEffectivePrice      = function(inputQty, outputQty)
    return bint.udiv(
        inputQty * bint.ipow(10, 18),
        outputQty
    )
end

-- CURVE CALC UTILS

---Express a float as numerator and denominator with a 4 decimal precision
---@param float number should be small enough so that precision + (number of digits of float) < 154
---@param precision number integer with number of digits of precision
---@return (bint, bint) The numerator and denominator
mod.bintFraction           = function(float, precision)
    local numerator = bint(string.format("%.0f", float * 10 ^ precision))
    local denominator = bint.ipow(10, precision)
    return numerator, denominator
end

---Express the RR as a fraction, using heuristics that leverage the discreet set of possible values
---@return (bint, bint) The numerator and denominator
mod.rrExponentFraction     = function()
    -- instead of the generic bint fraction that does exp * 100 / 100,
    -- use custom values in order to have smaller numbers
    if CurveRR == 0.15 then
        --  0.15 = 0.15 * 20 / 20 = 3 / 20
        return bint(3), bint(20)
    elseif CurveRR == 0.2 then
        -- 0.2  = 0.2  *  5 / 5 = 1 / 5
        return bint(1), bint(5)
    elseif CurveRR == 0.25 then
        -- 0.25 = 0.25 *  4 / 4 = 1 / 4
        return bint(1), bint(4)
    elseif CurveRR == 0.3 then
        -- 0.3  = 0.3  * 10 / 10 = 3 / 10
        return bint(3), bint(10)
    elseif CurveRR == 0.35 then
        -- 0.35 = 0.35 * 20 / 20 = 7 / 20
        return bint(7), bint(20)
    elseif CurveRR == 0.4 then
        -- 0.4  = 0.4  *  5 / 5 = 2 / 5
        return bint(2), bint(5)
    elseif CurveRR == 0.45 then
        -- 0.45 = 0.45 * 20 / 20 = 9 / 20
        return bint(9), bint(20)
    elseif CurveRR == 0.5 then
        -- 0.5  = 0.5  *  2 / 2 = 1 / 2
        return bint(1), bint(2)
    else
        error("Unsupported CurveRR value: " .. tostring(CurveRR))
    end
end

---Express 1 / RR as a fraction, using heuristics that leverage the discreet set of possible values
---@return (bint, bint) The numerator and denominator
mod.invRRExponentFraction  = function()
    -- instead of the generic bint fraction that does exp * 100 / 100,
    -- use custom values in order to have smaller numbers
    if CurveRR == 0.15 then
        -- 0.15 = 0.15 * 20 / 20 = 3 / 20   => 1 / RR = 20 / 3
        return bint(20), bint(3)
    elseif CurveRR == 0.2 then
        -- 0.2  = 0.2  *  5 / 5 = 1 / 5   =>  1 /RR = 5 / 1
        return bint(5), bint(1)
    elseif CurveRR == 0.25 then
        -- 0.25 = 0.25 *  4 / 4 = 1 / 4   =>  1 /RR = 4 / 1
        return bint(4), bint(1)
    elseif CurveRR == 0.3 then
        -- 0.3  = 0.3  * 10 / 10 = 3 / 10   => 1 / RR = 10 / 3
        return bint(10), bint(3)
    elseif CurveRR == 0.35 then
        -- 0.35 = 0.35 * 20 / 20 = 7 / 20   => 1 / RR = 20 / 7
        return bint(20), bint(7)
    elseif CurveRR == 0.4 then
        -- 0.4  = 0.4  *  5 / 5 = 2 / 5   =>  1 /RR = 5 / 2
        return bint(5), bint(2)
    elseif CurveRR == 0.45 then
        -- 0.45 = 0.45 * 20 / 20 = 9 / 20   => 1 / RR = 20 / 9
        return bint(20), bint(9)
    elseif CurveRR == 0.5 then
        -- 0.5  = 0.5  *  2 / 2 = 1 / 2   =>  1 /RR = 2 / 1
        return bint(2), bint(1)
    else
        error("Unsupported CurveRR value: " .. tostring(CurveRR))
    end
end

---Express CurveN, which is == (1 / RR-1), as a fraction, using
---heuristics that leverage the discreet set of possible values
---@return (bint, bint) The numerator and denominator
mod.curveNExponentFraction = function()
    -- instead of the generic bint fraction that does exp * 100 / 100,
    -- use custom values in order to have smaller numbers
    if CurveRR == 0.15 then
        --  0.15 = 0.15 * 20 / 20 = 3 / 20  => 1 / RR = 20 / 3  => 1 / RR - 1 = 17 / 3
        return bint(17), bint(3)
    elseif CurveRR == 0.2 then
        -- 0.2  = 0.2  *  5 / 5 = 1 / 5   => 1 / RR = 5 / 1   => 1 / RR - 1 = 4 / 1
        return bint(4), bint(1)
    elseif CurveRR == 0.25 then
        -- 0.25 = 0.25 *  4 / 4 = 1 / 4   => 1 / RR = 4 / 1   => 1 / RR - 1 = 3 / 1
        return bint(3), bint(1)
    elseif CurveRR == 0.3 then
        -- 0.3  = 0.3  * 10 / 10 = 3 / 10   => 1 / RR = 10 / 3  => 1 / RR - 1 = 7 / 3
        return bint(7), bint(3)
    elseif CurveRR == 0.35 then
        -- 0.35 = 0.35 * 20 / 20 = 7 / 20   => 1 / RR = 20 / 7  => 1 / RR - 1 = 13 / 7
        return bint(13), bint(7)
    elseif CurveRR == 0.4 then
        -- 0.4  = 0.4  *  5 / 5 = 2 / 5   => 1 / RR = 5 / 2   => 1 / RR - 1 = 3 / 2
        return bint(3), bint(2)
    elseif CurveRR == 0.45 then
        -- 0.45 = 0.45 * 20 / 20 = 9 / 20   => 1 / RR = 20 / 9  => 1 / RR - 1 = 11 / 9
        return bint(11), bint(9)
    elseif CurveRR == 0.5 then
        -- 0.5  = 0.5  *  2 / 2 = 1 / 2   => 1 / RR = 2 / 1   => 1 / RR - 1 = 1 / 1
        return bint(1), bint(1)
    else
        error("Unsupported CurveRR value: " .. tostring(CurveRR))
    end
end

---Returns floor( x^(1/n) ) for x up to any bit-size,
---without ever converting the bint to a number.
---Uses integer Newton's method, with an initial guess
---derived from the number of digits in x.
mod.nthRootBintNewton      = function(x, n)
    -- Make sure x and n are bints or at least convertible
    x = bint.new(x)
    local n_i = bint.tointeger(n) -- safe if n <= 50
    assert(n_i >= 1, "Root must be >= 1")
    assert(not x:isneg(), "Cannot compute root of negative number")
    if x:iszero() or x:isone() or n_i == 1 then
        return x
    end

    -- 1) Estimate number of decimal digits in x
    --    We do: d = #tostring(x)
    --    Example: if x = 12345, d=5.
    local s = tostring(x) -- decimal representation
    local d = #s
    if s:sub(1, 1) == '-' then
        -- shouldn't happen since x:isneg() is disallowed, but just in case...
        d = d - 1
    end

    -- 2) Derive an "order of magnitude" guess based on digits
    --    guess ~ 10^(floor((d-1)/n_i)).
    --    The (d-1) is so that e.g. x=100 -> d=3 -> (d-1)=2
    --    then for n=2 => guess = 10^(2/2)=10^1=10, which is close to sqrt(100)=10.
    --    For n=3 => guess=10^(2/3)=10^(0)=1, etc.
    local exponent = math.floor((d - 1) / n_i)
    if exponent < 0 then exponent = 0 end -- don't go negative
    local guess = bint.ipow(bint.frominteger(10), exponent)
    if guess:iszero() then
        guess = bint.one()
    end

    -- 3) Perform integer Newton iteration:
    --    nextGuess = ((n-1)*g + floor(x / g^(n-1))) // n
    --    Usually converges in a handful of steps.
    local n_bint   = bint.frominteger(n_i)
    local n_minus1 = bint.frominteger(n_i - 1)
    while true do
        -- g^(n-1):
        local guessPow = bint.ipow(guess, n_i - 1)
        -- ratio = x // g^(n-1)
        local ratio    = x // guessPow
        -- next = ( (n-1)*g + ratio ) // n
        local nxt      = (n_minus1 * guess + ratio) // n_bint

        -- check for convergence
        if nxt == guess or nxt == guess + bint.one() then
            -- see if nxt overshoots
            local nxtPow = bint.ipow(nxt, n_i)
            if nxtPow:ule(x) then
                return nxt
            else
                return guess
            end
        end
        guess = nxt
    end
end

---Raise a bint to the power of RR
---
---@param base bint
---@return bint The exponentiation result
mod.bintExpRR              = function(base)
    local expNum, expDenom = mod.rrExponentFraction()

    local raised = bint.ipow(base, expNum)
    local rooted = mod.nthRootBintNewton(raised, expDenom)
    return rooted
end

---Raise a bint to the power of 1 / RR
---
---@param base bint
---@return bint The exponentiation result
mod.bintExpInvRR           = function(base)
    local expNum, expDenom = mod.invRRExponentFraction()

    local raised = bint.ipow(base, expNum)
    local rooted = mod.nthRootBintNewton(raised, expDenom)
    return rooted
end

---Raise a bint to the power of CurveN
---
---Use fact that n = 1/R - 1
---
---@param base bint
---@return bint The exponentiation result
mod.bintExpCurveN          = function(base)
    local expNum, expDenom = mod.curveNExponentFraction()

    local raised = bint.ipow(base, expNum)
    local rooted = mod.nthRootBintNewton(raised, expDenom)
    return rooted
end

return mod
