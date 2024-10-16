#!/bin/bash

# Recreate build directories
rm -rf ./build
rm -rf ./build-lua

# GENERATE LUA in /build-lua
mkdir -p ./build
mkdir -p ./build-lua

# build teal
cyan build -u

cd build-lua

amalg.lua -s counter/main.lua -o ../build/process.lua \
    counter.utils.tl-utils

# FINAL RESULT is build/main.lua

echo "Build finished."