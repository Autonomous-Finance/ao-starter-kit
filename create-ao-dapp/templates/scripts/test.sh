#!/bin/bash

# Set bin path
if [[ "$(uname)" == "Linux" ]]; then
    BIN_PATH="$HOME/.luarocks/bin"
else
    BIN_PATH="/opt/homebrew/bin"
fi

# Check if test directory exists
if [ ! -d "test" ]; then
    echo "test directory not found"
    exit 1
fi

# Check if busted is installed
if [ ! -f "$BIN_PATH/busted" ]; then
    echo "busted not found"
    exit 1
fi

# Run tests
$BIN_PATH/busted test --pattern "_test"