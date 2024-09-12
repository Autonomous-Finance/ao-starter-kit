import { readFile, writeFile } from "node:fs/promises";
import { parse } from "yaml";

// read processes file
const stateFile = process.env.STATE_FILE;

if (!stateFile) {
  throw new Error("STATE_FILE env variable is not set");
}

console.log(`Process state file is: ${stateFile}`);

// read state file
try {
  const stateFileContents = await readFile(stateFile, "utf-8");
  const parsedStateFile = parse(stateFileContents);
  for (const process in parsedStateFile) {
    const processId = parsedStateFile[process].processId;

    // write process id to process.ts
    const formatted = `export const ${process.toUpperCase()} = "${processId}";`;

    await writeFile(`./apps/frontend/src/constants/${process}_process.ts`, formatted);

    console.log(
      `Process injected successfully into ./apps/frontend/src/constants/${process}_process.ts`,
    );
  }
} catch (error) {
  console.error("Error reading state file. Maybe you need to deploy the process first?");
  process.exit(1);
}
