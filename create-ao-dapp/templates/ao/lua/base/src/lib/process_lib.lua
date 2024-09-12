local ao   = require "ao"
local db   = require "lib.db"
local json = require "json"
local mod  = {}

function mod.getInfo(msg)
    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Info",
            Version = tostring(Version)
        },
        Data = tostring(Version)
    })

    return Version
end

-- Get Books function
function mod.getBooks(msg)
    local books = db.getBooks()

    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Get-Books"
        },
        Data = json.encode(books)
    })
end

-- Add Book function
function mod.addBook(msg)
    local book = json.decode(msg.Data)

    db.addBook(book)

    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Add-Book"
        },
        Data = json.encode(book)
    })
end

-- Update Book function
function mod.updateBook(msg)
    local book = json.decode(msg.Data)

    db.updateBook(book)

    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Update-Book"
        },
        Data = json.encode(book)
    })
end

-- Delete Book function
function mod.deleteBook(msg)
    -- Check is msg.From is process owner
    assert(msg.From == Owner, "Only the process owner can delete a book")

    local book = json.decode(msg.Data)

    db.deleteBook(book.Id)

    mod.sendMessage({
        Target = msg.From,
        Tags = {
            ["Response-For"] = msg.Action,
            Action = "Delete-Book"
        },
        Data = json.encode(book)
    })
end

-- This function is here to allow the tests to mock the ao.send function
function mod.sendMessage(message)
    ao.send(message)
end

return mod
