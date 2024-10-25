#!/bin/bash

CYAN_VERSION="0.3.1-2"
TL_VERSION="0.15.3-1"
AMALG_VERSION="0.8-1"

# Install luacheck if not installed
if ! command -v luacheck &> /dev/null; then
    echo "luacheck is not installed."
    read -p "Install luacheck? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        luarocks install luacheck
    else
        exit 1
    fi
fi

# Install the correct version of tl
if ! luarocks show tl | grep -q "tl $TL_VERSION"; then
    echo "tl $TL_VERSION is not installed."
    read -p "Install tl $TL_VERSION? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        luarocks install tl $TL_VERSION
    else
        exit 1
    fi
fi

# Install the correct version of cyan
if ! luarocks show cyan | grep -q "cyan $CYAN_VERSION"; then
    echo "cyan $CYAN_VERSION is not installed."
    read -p "Install cyan $CYAN_VERSION? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        luarocks install cyan $CYAN_VERSION
    else
        exit 1
    fi
fi

# Install the correct version of amalg.lua
if ! luarocks show amalg | grep -q "amalg $AMALG_VERSION"; then
    echo "amalg $AMALG_VERSION is not installed."
    read -p "Install amalg $AMALG_VERSION? (y/n): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        luarocks install amalg $AMALG_VERSION
    else
        exit 1
    fi
fi

echo "All missing dependencies have been installed."
exit 0
