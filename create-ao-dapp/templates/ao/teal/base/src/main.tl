require 'types'

local counter = require "counter.counter"

-- Initialize global variables
Version = "0.0.1"
Counter = 0

-- Handler functions
local function infoHandler(msg: Message)
  ao.send({
    Target = msg.From,
    Version = Version,
    Counter = tostring(Counter)
  })
end

-- Add handlers
Handlers.add('info', 
  Handlers.utils.hasMatchingTag('Action', 'Info'), 
  infoHandler
)

Handlers.add('increaseCounter', 
  Handlers.utils.hasMatchingTag('Action', 'IncreaseCounter'), 
  counter.increaseCounter
)

Handlers.add('resetCounter',
  Handlers.utils.hasMatchingTag('Action', 'ResetCounter'),
  counter.resetCounter
)