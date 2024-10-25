local process = require "lib.counter"

--- @type string
Version       = "0.0.1"

--- @type number
Counter       = Counter or 0

--- Handler to get Info
--- @param msg Message
--- @return nil
local function infoHandler(msg)
    ao.send({
        Target = msg.From,
        Version = Version,
        Counter = tostring(Counter)
    })
end

-- Handler to get Info
Handlers.add("info",
    Handlers.utils.hasMatchingTag("Action", "Info"),
    infoHandler
)

-- Handler to increase Counter
Handlers.add("increase",
    Handlers.utils.hasMatchingTag("Action", "IncreaseCounter"),
    process.increaseCounter
)

-- Handler to reset Counter
Handlers.add("reset",
    Handlers.utils.hasMatchingTag("Action", "ResetCounter"),
    process.resetCounter
)
