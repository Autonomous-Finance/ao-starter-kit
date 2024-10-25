local mod           = {}

--- Handler to increase Counter
--- @param msg Message
--- @return nil
mod.increaseCounter = function(msg)
    Counter = Counter + 1

    ao.send({
        Target = msg.From,
        Action = "Increase",
        Counter = tostring(Counter),
        Data = tostring(Counter)
    })
end

--- Handler to reset Counter
--- @param msg Message
--- @return nil
mod.resetCounter    = function(msg)
    Counter = 0

    ao.send({
        Target = msg.From,
        Action = "Reset",
        Counter = tostring(Counter),
        Data = tostring(Counter)
    })
end

return mod
