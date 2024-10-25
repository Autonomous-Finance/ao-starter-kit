#!/bin/bash

# Get the directory of this script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Color codes for output
RED='\033[0;31m'    # Red color for errors
GREEN='\033[0;32m'  # Green color for success messages
NC='\033[0m'        # No Color (reset to default)

# Set variables for directories
SOURCE_DIR="$SCRIPT_DIR/../src"
BUILD_DIR="$SCRIPT_DIR/../build"

# Change to the project root directory
PROJECT_ROOT="$SCRIPT_DIR/.."
cd "$PROJECT_ROOT" || exit 1

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}Error: Source directory '$SOURCE_DIR' not found.${NC}"
    exit 1
fi

# Clean previous builds
rm -rf "$BUILD_DIR"

# Create build directories
mkdir -p "$BUILD_DIR"

# Check if there are any .lua files in the src directory
LUA_FILES=$(find "$SOURCE_DIR" -path "$SOURCE_DIR/test" -prune -o -type f -name "*.lua" -print)
if [ -z "$LUA_FILES" ]; then
    echo -e "${RED}Error: No '.lua' files found in '$SOURCE_DIR' excluding '$SOURCE_DIR/test'.${NC}"
    exit 1
fi

# Find the main Lua file (assuming it's named 'main.lua')
MAIN_LUA_FILE=$(find "$SOURCE_DIR" -path "$SOURCE_DIR/test" -prune -o -type f -name "main.lua" -print | head -n 1)
if [ -z "$MAIN_LUA_FILE" ]; then
    echo -e "${RED}Error: Main Lua file 'main.lua' not found in '$SOURCE_DIR' excluding '$SOURCE_DIR/test'.${NC}"
    exit 1
fi

# Navigate to the build-lua directory
cd "$SOURCE_DIR" || exit 1

# Generate the module list in the format directory.filename, excluding 'test' directory
MODULE_LIST=()
while IFS= read -r file; do
    # Skip files in the 'test' directory
    if [[ "$file" == ./test/* ]]; then
        continue
    fi
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
    echo -e "${RED}Error: 'amalg.lua' command failed.${NC}"
    exit 1
fi

echo -e "${GREEN}Build finished.${NC}"
exit 0
