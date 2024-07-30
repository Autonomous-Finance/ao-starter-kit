#!/bin/bash

# Check if build directory exists or create it
if [ ! -d "build" ]; then
    mkdir build
fi

# Check if docker is installed
if ! command -v docker &> /dev/null; then
    echo "docker not found"
    exit 1
fi

# Build process
docker run --rm -it -v $(pwd):/build -w /build lalex/lua-squish .

# Read from ./squishy the Output file where to prepend the reset_modules.lua
output_line=$(grep "Output" ./squishy)
output_file=$(echo "$output_line" | awk -F "'" '{print $2}')

# Prepend reset_modules.lua to the squished file
cat ./src/reset_modules.lua | cat - ./$output_file > temp && mv temp ./build/process.lua