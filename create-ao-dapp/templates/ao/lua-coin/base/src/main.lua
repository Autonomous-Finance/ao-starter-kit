local bint = require(".bint")(4096) -- gives us 1234 digits for safe power calculations and fractionalizing


Calc   = require("lib.calc")
Botega = require("lib.botega")
Curve  = require("lib.curve")


--[[
  ** Bonding Curve function

  This bonding curve is based on the power function:

      price = m * supply ^ n

  m and n can be configured and they determine the curve's shape.
  m and n are stored in CurveM and CurveN at inception

  The bonding curve manages 2 tokens:
  - ISSUED_TOKEN: the token being distributed, tracked as CurveSupply
  - QUOTE_TOKEN: the token being received in exchange, accumulated as CurveReserve

  ** Buys & Sells

  Buys from the curve: pay QUOTE_TOKEN -> receive ISSUED_TOKEN
  Sells to the curve: pay ISSUED_TOKEN -> receive QUOTE_TOKEN

  The Curve is initialized by receiving the total supply of ISSUED_TOKEN

  The Curve allows for sells/buys until a certain target is reached.
  Then it migrates to Botega.

  ** Curve Target & Derived Configuration

  The target is defined in terms of QUOTE_TOKEN to be accumulated as CurveReserve.
  This value is stored as TargetLiquidity and is configured at inception

  The curve derives its TargetSupply, TargetPrice and TargetMarketCap from the configured TargetLiquidity.

  ** Botega Migration

  When the target is reached, the curve stops accepting buys & sells.
  It creates a Botega AMM and provides its accumulated reserves as liquidity,
  while matching them with a corresponding amount of ISSUED_TOKEN.

  Developers can configure how the curve should manage the Botega LP tokens.
]]

-- qAR by default
QUOTE_TOKEN_PROCESS       = QUOTE_TOKEN_PROCESS or
    'NG-0lVX882MG5nhARrSzyprEK6ejonHpdUmaaMPsHE8'
QUOTE_TOKEN_TICKER        = "qAR"
QUOTE_TOKEN_DENOMINATION  = 12
ISSUED_TOKEN_PROCESS      = ISSUED_TOKEN_PROCESS or
    "41lN_XQGZmmL_cNrn4_-80YiTrCjzW6H67cWBzFGOQ0" -- LTK
ISSUED_TOKEN_DENOMINATION = ISSUED_TOKEN_DENOMINATION or
    18
ISSUED_TOKEN_TICKER       = ISSUED_TOKEN_TICKER or "LTK"

INITIAL_CURVE_RR          = 0.5;
INITIAL_CURVE_M           = 1e-8;
INITIAL_CURVE_FEE         = 100;
INITIAL_LP_TOKENS_TO_BURN = 100;
INITIAL_TARGET_SUPPLY     = 1000000
INITIAL_TARGET_MARKET_CAP = 10000
INITIAL_DEV_ACCOUNT       = "Pw6aamwaKdmlkgKMNLX1ekzvyBPO8r-S4QhIpL34QVw";


-- configure bonding curve

TargetMarketCap        = TargetMarketCap or bint(INITIAL_TARGET_MARKET_CAP) * bint.ipow(10, QUOTE_TOKEN_DENOMINATION)
TargetSupply           = TargetSupply or bint(INITIAL_TARGET_SUPPLY) * bint.ipow(10, ISSUED_TOKEN_DENOMINATION)
CurveRR                = CurveRR or INITIAL_CURVE_RR
local derivedCfg       = Calc.curveDerivedConfig()
CurveN                 = CurveN or derivedCfg.n
TargetLiquidity        = TargetLiquidity or derivedCfg.targetLiquidity
TargetPrice            = TargetPrice or derivedCfg.targetPrice
CurveM                 = CurveM or Calc.scaleCurveM(INITIAL_CURVE_M)

IsInitialized          = IsInitialized or false
AvailableForSupply     = AvailableForSupply or bint(0)

CurveReserve           = CurveReserve or bint(0)       -- quote token: how much taken in via buys
CurveSupply            = CurveSupply or bint(0)        -- issued token: how much given out via sells

CurveFee               = CurveFee or INITIAL_CURVE_FEE -- bps - represents a % of the qAR, on buys and sells
FeesCollected          = FeesCollected or bint(0)

LP_TOKENS_TO_BURN      = LP_TOKENS_TO_BURN or
    INITIAL_LP_TOKENS_TO_BURN -- bps - representa a % of the lp tokens obtained on botega migration

IsMigrating            = false
HasMigrated            = false
BotegaAmmProcess       = BotegaAmmProcess or nil
MigrationSupply        = MigrationSupply or nil

BOTEGA_FACTORY_PROCESS = "3XBGLrygs11K63F_7mldWz4veNx6Llg6hI2yZs8LKHo"
BURNER_PROCESS         = 'tPaIyq3VcpUdrYorOyH90aUbRo4x1Cv2S9DW-chowog'
DEV_ACCOUNT            = INITIAL_DEV_ACCOUNT

-- HANDLERS
Handlers.add('info',
    Handlers.utils.hasMatchingTag('Action', 'Info'),
    Curve.handleInfo
)

-- transfer curve tokens into curve
Handlers.add('initialize',
    function(msg)
        return Handlers.utils.hasMatchingTag('Action', 'Credit-Notice') and
            msg.Tags["From-Process"] == ISSUED_TOKEN_PROCESS and
            msg.Tags["X-Action"] == "Initialize"
    end,
    Curve.handleInitialize
)

Handlers.add('getBuyOutput',
    Handlers.utils.hasMatchingTag('Action', 'Get-Buy-Output'),
    Curve.handleGetBuyOutput
)


Handlers.add('getSellOutput',
    Handlers.utils.hasMatchingTag('Action', 'Get-Sell-Output'),
    Curve.handleGetSellOutput
)

Handlers.add('buy',
    function(msg)
        return Handlers.utils.hasMatchingTag('Action', 'Credit-Notice') and
            msg.Tags["From-Process"] == QUOTE_TOKEN_PROCESS and
            msg.Tags["X-Action"] == "Curve-Buy"
    end,
    Curve.handleBuyFromCurve
)

Handlers.add('sell',
    function(msg)
        return Handlers.utils.hasMatchingTag('Action', 'Credit-Notice') and
            msg.Tags["From-Process"] == ISSUED_TOKEN_PROCESS and
            msg.Tags["X-Action"] == "Curve-Sell"
    end,
    Curve.handleSellToCurve
)
