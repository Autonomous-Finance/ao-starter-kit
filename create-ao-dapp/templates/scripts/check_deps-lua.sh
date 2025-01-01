#!/bin/bash

LUA_VERSION="5.4.6"
AMALG_VERSION="0.8-1"

# Color codes for output
RED='\033[0;31m'    # Red color for errors
GREEN='\033[0;32m'  # Green color for success messages
NC='\033[0m'        # No Color (reset to default)

# Function to compare version strings
version_greater_equal() {
    if [ "$(printf '%s\n' "$2" "$1" | sort -V | head -n1)" = "$2" ]; then
        return 0
    else
        return 1
    fi
}

# Check if Lua is installed and version is >= 5.4.6
INSTALLED_VERSION=$(lua -v 2>&1 | grep -o '[0-9]\+\.[0-9]\+\.[0-9]\+')
if ! version_greater_equal "$INSTALLED_VERSION" "$LUA_VERSION"; then
    echo -e "${RED}Lua version must be $LUA_VERSION or higher. Found version: $INSTALLED_VERSION${NC}"
    exit 1
fi

# Check if Luarocks is installed
if ! command -v luarocks &> /dev/null; then
    echo -e "${RED}Luarocks is not installed.${NC}"
    exit 1
fi

# Check if luacheck is installed
if ! command -v luacheck &> /dev/null; then
    echo -e "${RED}luacheck is not installed.${NC}"
    exit 1
fi

# Check if amalg.lua is installed
if ! luarocks show amalg | grep -q "amalg $AMALG_VERSION"; then
    echo -e "${RED}amalg $AMALG_VERSION is not installed.${NC}"
    exit 1
fi

echo -e "${GREEN}All dependencies are installed correctly.${NC}"
exit 0
