-- this file only creates type definitions for the lua package
local dummy = {}

global record DummyModule
    print_dummy: function(n: number)
end

-- Assign the module type
return dummy as DummyModule