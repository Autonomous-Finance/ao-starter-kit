require 'types'

local dbUtils = require "utils.db-utils"
local json = require "json"

local mod = {}

mod.getBooks = function(msg: Message)
    local books = dbUtils.rawQuery("SELECT * FROM Books")

    ao.send({
    Target = msg.From,
    ["Response-For"] = msg.Tags.Action,
    Action = "Get-Books",
    Data = json.encode(books)
    })
end

mod.addBook = function (msg:Message)
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

mod.updateBook = function (msg:Message)
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

mod.deleteBook = function (msg: Message)
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

return mod