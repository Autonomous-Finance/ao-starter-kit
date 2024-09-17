-- TODO review correctness / accuracy of these types

global record statement
    bind_names: function(self: statement, args: any): nil
    step: function(self: statement): boolean, string
    get: function(self: statement, index: integer): any
    reset: function(self: statement): nil
    finalize: function(self: statement): boolean
    nrows: function(self: statement): function(): table
  end
  
  global record db
    prepare: function(self: db, sql: string): statement
    errmsg: function(self: db): string
    exec: function(self: db, sql: string): boolean
    close: function(self: db): nil
  end
  
  
  local record lsqlite3
    open_memory: function(): db
    OK: boolean
  end
  
  
  return lsqlite3