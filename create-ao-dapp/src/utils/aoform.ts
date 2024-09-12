import { writeFile } from "node:fs/promises";
import { Document } from "yaml";
import type { PackageManager } from "../types";

export default class AoFormGenerator {
  projectPath: string;
  processName: string;
  packageManager: PackageManager;

  constructor({
    projectPath,
    processName,
    packageManager,
  }: {
    projectPath: string;
    processName: string;
    packageManager: PackageManager;
  }) {
    this.projectPath = projectPath;
    this.processName = processName;
    this.packageManager = packageManager;
  }

  async generateAoFormYaml() {
    const doc = new Document([
      {
        name: this.processName,
        file: "build/process.lua",
        prerun: "./src/reset_modules.lua",
        scheduler: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA",
        module: "GYrbbe0VbHim_7Hi6zrOpHQXrSQz07XNtwCnfbFo2I0",
        tags: [
          {
            name: "Name",
            value: this.processName,
          },
          {
            name: "Powered-By",
            value: "create-ao-dapp",
          },
        ],
      },
    ]);

    doc.commentBefore = `# AoForm Configuration
# This file is used to configure the AoForm package
# For more information, visit https://github.com/Autonomous-Finance/aoform`;

    return await writeFile(
      `${this.projectPath}/ao/${this.processName}/processes.yaml`,
      String(doc)
    );
  }

  async addDeployScript() {
    const deployScript = `#!/bin/bash
	
aoform apply -f processes.yaml`;

    await writeFile(
      `${this.projectPath}/ao/${this.processName}/scripts/deploy.sh`,
      deployScript
    );
  }
}
