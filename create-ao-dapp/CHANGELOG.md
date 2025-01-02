# create-ao-dapp

## 0.2.1

### Patch Changes

- 84bea57: fix lua sqlite template by removing ao dependency

## 0.2.0

- Update process deployments with aoform.
- Introduces support for AOS 2.0.0 and 2.0.1
- Enhances DX experience with advanced build scripts.

### Dependencies update:

- tl 0.15.3-1 - Teal, a typed dialect of Lua
- cyan 0.3.1-2 - A build system for the Teal language
- amalg 0.8-1 - Amalgamation for Lua modules/scripts.

### Minor Changes

- 2f8d2e4: Refactor templates system and Build scripts.

  Implement new build scripts that enhance project scaffolding and DX.
  Build scripts now check for required dependencies and tries to install them via luarocks.

- Fix SQLite processes to spawn with dedicated sqlite AOS module.
- Add postinstall script to automatically set permissions.
- Running `build.sh` script now checks dependencies and also tries to update them to the required versions.

## 0.1.12

### Patch Changes

- 4e18be2: fix teal-sqlite template and downloads number

## 0.1.11

### Patch Changes

- bf5ae77: fix lua build and improve docs

## 0.1.10

### Patch Changes

- 5b09abe: fix teal-sqlite types in template

## 0.1.9

### Patch Changes

- 19dd86b: Add multiple templates and refactor create init

## 0.1.8

### Patch Changes

- 4382a1e: added teal template
- 8e8b312: Update base template with sqlite and frontend template with basic CRUD

## 0.1.1

### Patch Changes

- update permaweb deployment script and docs

## 0.1.0

### Minor Changes

- implement amalg.lua and permaweb deploy

## 0.0.2

### Patch Changes

- add powered by links and disable teal

## 0.0.1

### Patch Changes

- initial mvp
