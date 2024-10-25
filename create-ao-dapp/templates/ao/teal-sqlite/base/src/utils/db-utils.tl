require "types"

local sqlite3 = require('lsqlite3')
local dbUtils = {}

function dbUtils.queryMany(stmt: statement): {table}
  local rows: {table} = {}
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

function dbUtils.queryOne(stmt: statement): table
  return dbUtils.queryMany(stmt)[1]
end

function dbUtils.rawQuery(query: string): {table}
  local stmt = DB:prepare(query)
  if not stmt then
    error("Err: " .. DB:errmsg())
  end
  return dbUtils.queryMany(stmt)
end

function dbUtils.execute(stmt: statement, statmentHint: string)
  if stmt then
    stmt:step()
    if stmt:finalize() ~= sqlite3.OK then
      error("Failed to finalize SQL statement" .. statmentHint .. ": " .. DB:errmsg())
    end
  else
    error("Failed to prepare SQL statement" .. statmentHint .. ": " .. DB:errmsg())
  end
end

return dbUtils