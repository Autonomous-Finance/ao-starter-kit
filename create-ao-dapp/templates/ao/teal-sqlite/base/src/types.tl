require "lsqlite3"

-- Define types
global Owner: string
global Variant: string
global Counter: number
global DB: db
global Configured: boolean

global record Book
    Id: number
    Author: string
    Title: string
end

return {}