local ao  = require "ao"

Version       = "0.0.1"

local process = {}

function process.getInfo(msg)
    process.sendMessage({
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
function process.sendMessage(message)
    ao.send(message)
end

-- Handler to get Info
Handlers.add("info", {
        Action = "Info"
    },
    process.getInfo
)