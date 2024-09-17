-- Define types
global Variant: string
global Counter: number

-- Initialize global variables
Variant = "0.0.3"
Counter = 0

-- Handler functions
local function infoHandler(msg: Message)
  ao.send({
    Target = msg.From,
    Variant = Variant,
    Counter = tostring(Counter)
  })
end

local function increaseCounter(msg: Message)
  Counter = Counter + 1

  ao.send({
    Target = msg.From,
    Action = "Increase",
    Counter = tostring(Counter),
    Data = tostring(Counter)
  })
end

local function resetCounter(msg: Message)
  Counter = 0

  ao.send({
    Target = msg.From,
    Action = "Reset",
    Counter = tostring(Counter),
    Data = tostring(Counter)
  })
end


-- Add handlers
Handlers.add('info', Handlers.utils.hasMatchingTag('Action', 'Info'), infoHandler)
Handlers.add('increaseCounter', Handlers.utils.hasMatchingTag('Action', 'IncreaseCounter'), increaseCounter)
Handlers.add('resetCounter', Handlers.utils.hasMatchingTag('Action', 'ResetCounter'), resetCounter)