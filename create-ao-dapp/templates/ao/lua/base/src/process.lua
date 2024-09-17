local process = require "lib.process_lib"

Version       = "0.0.1"
Counter       = Counter or 0

-- Handler to get Info
Handlers.add("info",
    Handlers.utils.hasMatchingTag("Action", "Info"),
    process.getInfo
)

-- Handler to increase Counter
Handlers.add("increase",
    Handlers.utils.hasMatchingTag("Action", "IncreaseCounter"),
    process.increaseCounter
)

-- Handler to reset Counter
Handlers.add("reset",
    Handlers.utils.hasMatchingTag("Action", "ResetCounter"),
    process.resetCounter
)
