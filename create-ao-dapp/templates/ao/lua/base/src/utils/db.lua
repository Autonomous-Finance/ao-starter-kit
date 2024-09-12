local sqlite3 = require('lsqlite3')
local dbUtils = {}

function dbUtils.queryMany(stmt)
    local rows = {}
    -- Check if the statement was prepared successfully
    if stmt then
        for row in stmt:nrows() do
            table.insert(rows, row)
        end
        stmt:finalize()
    else
        error("Err: " .. DB:errmsg())
    end
    return rows
end

function dbUtils.queryOne(stmt)
    return dbUtils.queryMany(stmt)[1]
end

function dbUtils.rawQuery(query)
    local stmt = DB:prepare(query)
    if not stmt then
        error("Err: " .. DB:errmsg())
    end
    return dbUtils.queryMany(stmt)
end

function dbUtils.execute(stmt, statmentHint)
    if stmt then
        stmt:step()
        if stmt:finalize() ~= sqlite3.OK then
            error("Failed to finalize SQL statement" .. (statmentHint or "") .. ": " .. DB:errmsg())
        end
    else
        error("Failed to prepare SQL statement" .. (statmentHint or "") .. ": " .. DB:errmsg())
    end
end

function dbUtils.queryManyWithParams(query, params, hint)
    local stmt = DB:prepare(query)
    if not stmt then
        error("Err" .. (hint or "") .. ": " .. DB:errmsg())
    end
    stmt:bind_names(params)

    return dbUtils.queryMany(stmt)
end

function dbUtils.queryOneWithParams(query, params, hint)
    local res = dbUtils.queryManyWithParams(query, params, hint)
    if #res == 0 then
        return nil
    end
    return res[1]
end

return dbUtils
