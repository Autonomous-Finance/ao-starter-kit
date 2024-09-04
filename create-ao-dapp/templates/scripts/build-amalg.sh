#!/bin/bash

# Recreate build directories
rm -rf ./build
mkdir -p ./build

luacheck src/process.lua \
    lib/process_lib.lua
    
amalg.lua -s process.lua -o build/process.lua \
    lib.process_lib