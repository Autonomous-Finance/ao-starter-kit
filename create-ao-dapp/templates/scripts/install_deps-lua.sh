#!/bin/bash

AMALG_VERSION="0.8-1"

# Color codes for output
YELLOW='\033[0;33m'  # Yellow color for warnings or informational messages
GREEN='\033[0;32m'  # Green color for success messages
NC='\033[0m'        # No Color (reset to default)

# Install luacheck if not installed
if ! command -v luacheck &> /dev/null; then
    echo -e "${YELLOW}luacheck is not installed.${NC}"
    read -p "Install luacheck? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        luarocks install luacheck
    else
        exit 1
    fi
fi

# Install the correct version of amalg.lua
if ! luarocks show amalg | grep -q "amalg $AMALG_VERSION"; then
    echo -e "${YELLOW}amalg $AMALG_VERSION is not installed.${NC}"
    read -p "Install amalg $AMALG_VERSION? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        luarocks install amalg $AMALG_VERSION
    else
        exit 1
    fi
fi

echo -e "${GREEN}All missing dependencies have been installed.${NC}"
exit 0
