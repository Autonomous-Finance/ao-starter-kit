import { writeFile } from "node:fs/promises";
import { Document } from "yaml";
import { $ } from "zx";
import type { PackageManager } from "../types";

const AOFORM_PACKAGE = "github:Autonomous-Finance/aoform#4cbb877ca646e8823fd7ce4fdae0f9c38aef4830";

export default class AoFormGenerator {
  projectPath: string;
  processName: string;
  packageManager: PackageManager;

  constructor({
    projectPath,
    processName,
    packageManager,
  }: { projectPath: string; processName: string; packageManager: PackageManager }) {
    this.projectPath = projectPath;
    this.processName = processName;
    this.packageManager = packageManager;
  }

  async installAoForm() {
    return await $`cd ${this.projectPath} && ${this.packageManager} install --save-dev ${AOFORM_PACKAGE}`;
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
        ],
      },
    ]);

    doc.commentBefore = `# AoForm Configuration
# This file is used to configure the AoForm package
# For more information, visit`;

    return await writeFile(`${this.projectPath}/ao/${this.processName}/aoform.yaml`, String(doc));
  }

  async addDeployScript() {
    const deployScript = `#!/bin/bash
	
aoform apply -f ./ao/${this.processName}/aoform.yaml`;

    await writeFile(`${this.projectPath}/ao/${this.processName}/scripts/deploy.sh`, deployScript);
  }
}
