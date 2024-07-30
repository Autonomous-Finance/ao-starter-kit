# ao-starter-kit
The ao-starter-kit provides a comprehensive boilerplate for setting up an AO process, including testing, modules, and amalgamation alongside a React application. This starter kit aims to simplify the development and deployment of AO processes by providing pre-configured setups and example processes.

## Directory Structure
- Backend Processes: Located in the `./ao` directory, this includes all the backend processes necessary for the applications.
- Frontend Applications: Located in the `./apps` directory, this include all the frontend applications for the project.

## Prerequisites
- Bun: Bun is a fast JavaScript all-in-one toolkit.
- LuaRocks: A package manager for Lua modules.
- Busted: A unit testing framework for Lua.
- Docker: Containerization platform required for the build process.

### Installing Prerequisites
1. Bun: Follow the installation instructions on the [Bun.sh website](https://bun.sh/).
2. LuaRocks: Follow the installation instructions on the [LuaRocks website](https://luarocks.org/).
3. Busted: Install via LuaRocks with the command:
```bash
luarocks install busted
```
4. Docker: Download and install Docker from the official Docker website.

## Testing Processes
To test the example process, navigate to the project root and run the following command:

```
bun run counter:test
```

This command will execute the test suite for the Counter process using Busted. For more detailed information about the testing framework, visit the [ao-process-testing repository](https://github.com/Autonomous-Finance/ao-process-testing).

## Building processes
Building processes requires Docker to call the lua-squish image. Ensure that Docker is installed and running on your machine.

### Squishy File
The process root dir must contain a squishy file with build instructions. Here is an example squishy file for the Counter process:

```
Main "src/process.lua"

Module "counter_lib" "./src/counter_lib.lua"

Option "minify-level" "none"
Output 'build/counter.lua'
```

### Build Command
To build the example process, run the following command from the project root:

```
bun run counter:build
```

The output will be written to `build/counter.lua`.

## Deploying Processes
Deploying processes is managed through [AOForm](https://github.com/Autonomous-Finance/aoform).

Aoform is a tool to deploy a set of processes to AO. These can be defined in a aoform.yaml file. It uses a statefile to keep track of deployed processes and only updates code when needed.

### Managing processes.yaml file
Configuration file for the counter process is present at `./ao/counter/aoform.yaml`

```yaml
- name: hello-world
  file: build/process.lua
  prerun: reset-modules.lua
  scheduler: _GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA
  module: GYrbbe0VbHim_7Hi6zrOpHQXrSQz07XNtwCnfbFo2I0
  tags:
    - name: Hello World
      value: hello-world
```

### Deploying
1. Make sure you set your wallet in the ENV `export WALLET_JSON="$(cat ~/.aos.json)"`
2. Run `con
## Additional Information
- Documentation: Detailed documentation and further examples can be found in the relevant directories.
- Contribution: Contributions are welcome! Please fork the repository and submit pull requests.
- Support: For any issues or questions, please open an issue on the GitHub repository.
