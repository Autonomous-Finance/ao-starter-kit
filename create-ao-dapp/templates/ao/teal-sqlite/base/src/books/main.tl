require "books.globals"

local sqlite3 = require('lsqlite3')
local dbUtils = require "books.db-utils"
local json = require "json"

-- Initialize global variables
Variant = "0.0.3"
Counter = 0
DB            = DB or sqlite3.open_memory()
Configured    = Configured or false

global record Book
    Id: number
    Author: string
    Title: string
end

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

local function getBooks(msg: Message)
  local books = dbUtils.rawQuery("SELECT * FROM Books")

  ao.send({
    Target = msg.From,
    ["Response-For"] = msg.Tags.Action,
    Action = "Get-Books",
    Data = json.encode(books)
  })
end

local function addBook(msg:Message)
  local book = json.decode(msg.Data) as Book

  local stmt = DB:prepare([[
    INSERT INTO Books (Author, Title)
    VALUES (:Author, :Title);
  ]])

  if not stmt then
      error("Failed to prepare statement: " .. DB:errmsg())
  end

  stmt:bind_names({
      Author = book.Author,
      Title = book.Title
  })

  local _, err = stmt:step()

  if err then
      print("Error when executing statement " .. db:errmsg())
  end

  stmt:finalize()

  ao.send({
      Target = msg.From,
      ["Response-For"] = msg.Tags.Action,
      Action = "Add-Book",
      Data = json.encode(book)
  })
end

local function updateBook(msg:Message)
  local book = json.decode(msg.Data) as Book

  local stmt = DB:prepare([[
      UPDATE Books
      SET Author = :Author, Title = :Title
      WHERE Id = :Id;
  ]])

  if not stmt then
      error("Failed to prepare statement: " .. DB:errmsg())
  end

  stmt:bind_names({
      Author = book.Author,
      Title = book.Title,
      Id = book.Id
  })

  local _, err = stmt:step()
  if err then
      print("Error when executing statement " .. db:errmsg())
  end
  stmt:reset()

  ao.send({
      Target = msg.From,
      ["Response-For"] = msg.Tags.Action,
      Action = "Update-Book",
      Data = json.encode(book)
  })
end

local function deleteBook(msg: Message)
  -- Check is msg.From is process owner
  assert(msg.From == Owner, "Only the process owner can delete a book")

  local book = json.decode(msg.Data) as Book

  local stmt = DB:prepare([[
      DELETE FROM Books
      WHERE Id = :Id;
  ]])

  if not stmt then
      error("Failed to prepare statement: " .. DB:errmsg())
  end

  stmt:bind_names({
      Id = book.Id
  })

  local _, err = stmt:step()
  if err then
      print("Error when executing statement " .. db:errmsg())
  end
  stmt:reset()

  ao.send({
      Target = msg.From,
      ["Response-For"] = msg.Tags.Action,
      Action = "Delete-Book",
      Data = json.encode(book)
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
    getBooks
)

-- Handler to add a Book
Handlers.add("addBook",
    Handlers.utils.hasMatchingTag("Action", "Add-Book"),
    addBook
)

-- Handler to update a Book
Handlers.add("updateBook",
    Handlers.utils.hasMatchingTag("Action", "Update-Book"),
    updateBook
)

-- Handler to delete a Book
Handlers.add("deleteBook",
    Handlers.utils.hasMatchingTag("Action", "Delete-Book"),
    deleteBook
)
