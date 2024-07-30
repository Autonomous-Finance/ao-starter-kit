local ao  = require "ao"

local mod = {}

function mod.getInfo(msg)
    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Info",
            Version = tostring(Version)
        },
        Data = tostring(Version)
    })

    return Version
end

-- This function is here to allow the tests to mock the ao.send function
function mod.sendMessage(message)
    ao.send(message)
end

return mod
