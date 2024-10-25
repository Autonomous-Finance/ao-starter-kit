require 'types'

local mod = {}

mod.increaseCounter = function(msg: Message)
  Counter = Counter + 1

  ao.send({
      Target = msg.From,
      Action = "Increase",
      Counter = tostring(Counter),
      Data = tostring(Counter)
  })
end

mod.resetCounter = function(msg: Message)
  Counter = 0

  ao.send({
    Target = msg.From,
    Action = "Reset",
    Counter = tostring(Counter),
    Data = tostring(Counter)
  })
end

return mod