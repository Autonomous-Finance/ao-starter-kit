#!/bin/bash

# Check if build directory exists or create it
if [ ! -d "build" ]; then
    mkdir build
fi

# Prepend reset_modules.lua to the squished file
cat ./src/process.lua > ./build/process.lua