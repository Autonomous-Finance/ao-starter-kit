local process = require "lib.process_lib"

Version       = "0.0.1"

-- Handler to Send GET Request
Handlers.add("GetRequest",
    Handlers.utils.hasMatchingTag("Action", "GetRequest"),
    process.getRequest
)

-- Handler to Send POST Request
Handlers.add("PostRequest",
    Handlers.utils.hasMatchingTag("Action", "PostRequest"),
    process.postRequest
)

-- Handler to Receive Response from 0rbit Network
Handlers.add("ReceiveResponse",
    Handlers.utils.hasMatchingTag("Action", "Receive-Response"),
    process.receiveResponse
)

-- Handler to get $0RBT Points Balance
Handlers.add("CheckBalance",
    Handlers.utils.hasMatchingTag("Action", "CheckBalance"),
    process.checkBalance
)
