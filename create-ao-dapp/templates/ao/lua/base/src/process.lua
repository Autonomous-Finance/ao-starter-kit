local process = require "lib/process_lib"

Version       = "0.0.1"

-- Handler to get Info
Handlers.add("info",
    Handlers.utils.hasMatchingTag("Action", "Info"),
    process.getInfo
)