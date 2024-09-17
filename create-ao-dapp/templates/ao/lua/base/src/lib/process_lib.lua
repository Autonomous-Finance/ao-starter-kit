local ao  = require "ao"
local mod = {}

function mod.getInfo(msg)
    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Info",
            Version = tostring(Version),
            Counter = tostring(Counter)
        },
        Data = tostring(Counter)
    })

    return Version
end

-- Increase Counter function
function mod.increaseCounter(msg)
    Counter = Counter + 1

    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Increase",
            Counter = tostring(Counter)
        },
        Data = tostring(Counter)
    })

    return Counter
end

-- Reset Counter function
function mod.resetCounter(msg)
    Counter = 0

    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Reset",
            Counter = tostring(Counter)
        },
        Data = tostring(Counter)
    })

    return Counter
end

-- This function is here to allow the tests to mock the ao.send function
function mod.sendMessage(message)
    ao.send(message)
end

return mod
