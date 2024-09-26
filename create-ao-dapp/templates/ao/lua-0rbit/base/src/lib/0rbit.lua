local ao     = require "ao"
local _0rbit = {
    _version = "0.0.1",
    MAIN_PROCESS = "BaMK1dfayo75s3q1ow6AO64UDpD9SEFbeE8xYrY2fyQ",
    _0RBT_POINTS = "BUhZLMwQ6yZHguLtJYA5lLUa9LQzLXMXRfaq9FVcPJc"
}

-- To send a HTTP GET Request
function _0rbit.sendGetRequest(url)
    local fee_amount = "1000000000000" -- 1 $0RBT

    Send({
        Target = _0rbit._0RBT_TOKEN,
        Action = "Transfer",
        Recipient = _0rbit.MAIN_PROCESS,
        Quantity = fee_amount,
        ["X-Action"] = "Get-Real-Data",
        ["X-Url"] = url
    })
end

-- To send a HTTP POST Request
function _0rbit.sendPostRequest(url, body, headers)
    local fee_amount = "1000000000000" -- 1 $0RBT
    headers = headers or nil
    body = body or nil

    Send({
        Target = _0rbit._0RBT_TOKEN,
        Action = "Transfer",
        Recipient = _0rbit.MAIN_PROCESS,
        Quantity = fee_amount,
        ["X-Action"] = "Post-Real-Data",
        ["X-Url"] = url,
        ["X-Body"] = body,
        ["X-Headers"] = headers
    })
end

-- To receive response
function _0rbit.receiveResponse(msg, onResponse)
    local responseId = msg.RequestId;
    onResponse = onResponse or function() end
    print("Response received for RequestId " .. responseId)
    onResponse(msg)
end

-- To check balance of a recipient
function _0rbit.getBalance(recepient)
    recepient = recepient or ao.id

    Send({ Target = _0rbit._0RBT_TOKEN, Recipient = recepient, Tags = { Action = "Balance" } })
end

-- This function is here to allow the tests to mock the ao.send function
function _0rbit.sendMessage(message)
    ao.send(message)
end

return _0rbit
