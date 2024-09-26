local ao     = require "ao"
local json   = require "json"
local _0rbit = require "lib.0rbit"
local mod    = {}

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

-- HTTP GET Request
function mod.getRequest(msg)
    local url = msg.URL;

    _0rbit.sendGetRequest(url)
end

-- HTTP POST Request
function mod.postRequest(msg)
    local url = msg.URL;
    local body = json.encode({ msg.BODY }) or nil
    local headers = msg.HEADERS or nil

    _0rbit.sendPostRequest(url, body, headers)
end

-- Receive Response from 0rbit Network
function mod.receiveResponse(msg)
    _0rbit.receiveResponse(msg)
end

--Check $0RBT Points Balance
function mod.checkBalance(msg)
    local recipient = msg.RECIPIENT or ao.id
    _0rbit.getBalance(recipient)
end

-- This function is here to allow the tests to mock the ao.send function
function mod.sendMessage(message)
    ao.send(message)
end

return mod
