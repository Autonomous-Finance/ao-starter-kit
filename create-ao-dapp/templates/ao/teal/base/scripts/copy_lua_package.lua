local lfs = require("lfs") -- LuaFileSystem for directory operations

local function copy_directory(src, dest)
    -- Ensure the destination directory exists
    local attr = lfs.attributes(dest)
    if not attr then
        lfs.mkdir(dest)
    end

    for file in lfs.dir(src) do
        if file ~= "." and file ~= ".." then
            local src_path = src .. '/' .. file
            local dest_path = dest .. '/' .. file
            local attr = lfs.attributes(src_path)
            if attr.mode == "directory" then
                lfs.mkdir(dest_path)
                copy_directory(src_path, dest_path)
            else
                local src_file = io.open(src_path, "rb")
                if not src_file then
                    error("Failed to open source file: " .. src_path)
                end
                local dest_file = io.open(dest_path, "wb")
                if not dest_file then
                    src_file:close()
                    error("Failed to open destination file: " .. dest_path)
                end
                dest_file:write(src_file:read("*all"))
                src_file:close()
                dest_file:close()
            end
        end
    end
end

lfs.mkdir('./build-lua/')
copy_directory('./packages/', './build-lua/')