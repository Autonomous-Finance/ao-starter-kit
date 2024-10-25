require "types"

local sqlite3 = require('lsqlite3')
local booksManager = require "books.books-manager"

-- Initialize global variables
Variant = "0.0.1"

DB            = DB or sqlite3.open_memory()
Configured    = Configured or false

if not Configured then
  DB:exec([[
    CREATE TABLE IF NOT EXISTS Books (
        Id INTEGER PRIMARY KEY AUTOINCREMENT,
        Author TEXT NOT NULL,
        Title TEXT NOT NULL
    );
  ]])

  Configured = true
end

-- Handler functions
local function getInfo(msg: Message)
  ao.send({
      Target = msg.From,
      Action = "Info",
      Version = tostring(Variant),
      Data = tostring(Variant)
  })
end

-- Handler to get Info
Handlers.add("info",
    Handlers.utils.hasMatchingTag("Action", "Info"),
    getInfo
)

-- Handler to get all Books
Handlers.add("getBooks",
    Handlers.utils.hasMatchingTag("Action", "Get-Books"),
    booksManager.getBooks
)

-- Handler to add a Book
Handlers.add("addBook",
    Handlers.utils.hasMatchingTag("Action", "Add-Book"),
    booksManager.addBook
)

-- Handler to update a Book
Handlers.add("updateBook",
    Handlers.utils.hasMatchingTag("Action", "Update-Book"),
    booksManager.updateBook
)

-- Handler to delete a Book
Handlers.add("deleteBook",
    Handlers.utils.hasMatchingTag("Action", "Delete-Book"),
    booksManager.deleteBook
)
