local dbUtils = require "utils.db"

local db = {}

function db.Seed()
    DB:exec([[
        CREATE TABLE IF NOT EXISTS Books (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Author TEXT NOT NULL,
            Title TEXT NOT NULL
        );
    ]])

    Configured = true
end

function db.getBooks()
    return dbUtils.rawQuery("SELECT * FROM Books")
end

function db.addBook(book)
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
end

function db.updateBook(book)
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
end

function db.deleteBook(id)
    local stmt = DB:prepare([[
        DELETE FROM Books
        WHERE Id = :Id;
    ]])

    if not stmt then
        error("Failed to prepare statement: " .. DB:errmsg())
    end

    stmt:bind_names({
        Id = id
    })

    local _, err = stmt:step()
    if err then
        print("Error when executing statement " .. db:errmsg())
    end
    stmt:reset()
end

return db