#!/bin/bash

# Recreate build directories
rm -rf ./build
mkdir -p ./build

luacheck src/process.lua \
    src/lib/process_lib.lua \
    src/utils/db.lua \
    src/lib/db.lua

cd src
amalg.lua -s process.lua -o ../build/process.lua \
    lib.process_lib lib.db utils.db