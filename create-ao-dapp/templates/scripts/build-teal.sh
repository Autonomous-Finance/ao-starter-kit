#!/bin/bash

# Get the directory of this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Set variables for directories
SOURCE_DIR="$SCRIPT_DIR/../src"
BUILD_DIR="$SCRIPT_DIR/../build"
BUILD_LUA_DIR="$SCRIPT_DIR/../build-lua"

# Change to the project root directory
PROJECT_ROOT="$SCRIPT_DIR/.."
cd "$PROJECT_ROOT" || exit 1

# Check if tlconfig.lua exists
if [ ! -f "tlconfig.lua" ]; then
    echo "Error: 'tlconfig.lua' not found in the project directory."
    exit 1
fi

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Error: Source directory '$SOURCE_DIR' not found."
    exit 1
fi

# Check if there are any .tl files in the source directory and subdirectories
TL_FILES=$(find "$SOURCE_DIR" -type f -name "*.tl")
if [ -z "$TL_FILES" ]; then
    echo "Error: No '.tl' source files found in '$SOURCE_DIR' or its subdirectories."
    exit 1
fi

# Clean previous builds
rm -rf "$BUILD_DIR"
rm -rf "$BUILD_LUA_DIR"

# Create build directories
mkdir -p "$BUILD_DIR"
mkdir -p "$BUILD_LUA_DIR"

# Build using cyan
if ! cyan build -u; then
    echo "Error: 'cyan build -u' command failed."
    exit 1
fi

# Check if build-lua directory was created and contains .lua files
if [ ! -d "$BUILD_LUA_DIR" ]; then
    echo "Error: Build directory '$BUILD_LUA_DIR' not found."
    exit 1
fi

# Check if there are any .lua files in the build-lua directory
LUA_FILES=$(find "$BUILD_LUA_DIR" -type f -name "*.lua")
if [ -z "$LUA_FILES" ]; then
    echo "Error: No '.lua' files found in '$BUILD_LUA_DIR' after build."
    exit 1
fi

# Find the main Lua file (assuming it's named 'main.lua')
MAIN_LUA_FILE=$(find "$BUILD_LUA_DIR" -type f -name "main.lua" | head -n 1)
if [ -z "$MAIN_LUA_FILE" ]; then
    echo "Error: Main Lua file 'main.lua' not found in '$BUILD_LUA_DIR'."
    exit 1
fi

# Navigate to the build-lua directory
cd "$BUILD_LUA_DIR" || exit 1

# Generate the module list in the format directory.filename
MODULE_LIST=()
while IFS= read -r file; do
    # Remove the leading './' if present
    relative_path="${file#./}"
    # Remove the '.lua' extension
    module_path="${relative_path%.lua}"
    # Replace '/' with '.'
    module_name="${module_path//\//.}"
    # Exclude the main module (since it's specified separately with -s)
    if [ "$module_name" != "main" ]; then
        MODULE_LIST+=("$module_name")
    fi
done < <(find . -type f -name "*.lua")

# Use amalg.lua to combine Lua files
if ! amalg.lua -s "$MAIN_LUA_FILE" -o ../build/process.lua "${MODULE_LIST[@]}" ; then
    echo "Error: 'amalg.lua' command failed."
    exit 1
fi

echo "Build finished."
exit 0
