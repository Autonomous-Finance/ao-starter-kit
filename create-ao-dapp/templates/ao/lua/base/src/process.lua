local sqlite3 = require('lsqlite3')

local process = require "lib.process_lib"
local db      = require "lib.db"

Version       = "0.0.1"
DB            = DB or sqlite3.open_memory()
Configured    = Configured or false

if not Configured then
    db.Seed()
end

-- Handler to get Info
Handlers.add("info",
    Handlers.utils.hasMatchingTag("Action", "Info"),
    process.getInfo
)

-- Handler to get all Books
Handlers.add("getBooks",
    Handlers.utils.hasMatchingTag("Action", "Get-Books"),
    process.getBooks
)

-- Handler to add a Book
Handlers.add("addBook",
    Handlers.utils.hasMatchingTag("Action", "Add-Book"),
    process.addBook
)

-- Handler to update a Book
Handlers.add("updateBook",
    Handlers.utils.hasMatchingTag("Action", "Update-Book"),
    process.updateBook
)

-- Handler to delete a Book
Handlers.add("deleteBook",
    Handlers.utils.hasMatchingTag("Action", "Delete-Book"),
    process.deleteBook
)
