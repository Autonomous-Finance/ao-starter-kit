#!/bin/bash

LUA_VERSION="5.4.6"
CYAN_VERSION="0.3.1-2"
TL_VERSION="0.15.3-1"
AMALG_VERSION="0.8-1"

# Function to compare version strings
version_greater_equal() {
    [ "$(printf '%s\n%s' "$1" "$2" | sort -V | head -n1)" = "$2" ]
}

# Check if Lua is installed and version is >= 5.4.6
INSTALLED_VERSION="$(lua -v 2>&1 | grep -oE '[0-9]+\.[0-9]+\.[0-9]+')"
if ! version_greater_equal "$INSTALLED_VERSION" "$LUA_VERSION"; then
    echo -e "${RED}Lua version must be $LUA_VERSION or higher. Found version: $INSTALLED_VERSION${NC}"
    exit 1
fi

# Check if Luarocks is installed
if ! command -v luarocks &> /dev/null; then
    echo "Luarocks is not installed."
    exit 1
fi

# Check if luacheck is installed
if ! command -v luacheck &> /dev/null; then
    echo "luacheck is not installed."
    exit 1
fi

# Check if the correct version of tl is installed
if ! luarocks show tl | grep -q "tl $TL_VERSION"; then
    echo "tl $TL_VERSION is not installed."
    exit 1
fi

# Check if the correct version of cyan is installed
if ! luarocks show cyan | grep -q "cyan $CYAN_VERSION"; then
    echo "cyan $CYAN_VERSION is not installed."
    exit 1
fi

# Check if amalg.lua is installed
if ! luarocks show amalg | grep -q "amalg $AMALG_VERSION"; then
    echo "amalg $AMALG_VERSION is not installed."
    exit 1
fi

echo "All dependencies are installed correctly."
exit 0
