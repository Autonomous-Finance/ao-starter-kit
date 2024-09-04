---@diagnostic disable: duplicate-set-field
require("test.setup")()

_G.IsInUnitTest    = true -- set this per test file to keep ao.send() from doing anything
_G.VerboseTests    = 2    -- how much logging to see (0 - none at all, 1 - important ones, 2 - everything)
-- optional logging function that allows for different verbosity levels
_G.printVerb       = function(level)
    level = level or 2
    return function(...) -- define here as global so we can use it in application code too
        if _G.VerboseTests >= level then print(table.unpack({ ... })) end
    end
end

local process      = require "lib/process_lib"

-- Define initial state
_G.Version         = "0.0.1"

local resetGlobals = function()
    _G.Version = "0.0.1"
end

describe("process", function()
    setup(function()
        process.sendMessage = function(message)
            return message
        end
    end)

    describe("getInfo", function()
        it("should return Version", function()
            local message = {
                From = "0x123",
                Action = "Info",
                Tags = {}
            }

            local response = process.getInfo(message)

            assert.are.same(Version, response)

            -- reset globals
            resetGlobals()
        end)
    end)
end)
