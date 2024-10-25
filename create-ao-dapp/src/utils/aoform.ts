import { writeFile } from "node:fs/promises";
import { Document } from "yaml";
import type { PackageManager } from "../types";

const MODULE_BASIC = "bkjb55i07GUCUSWROtKK4HU1mBS_X0TyH3M5jMV6aPg";
const MODULE_SQLITE = "EAIJew2R7aptjpyn7TD7S7ldVW4cTpUhZCaMvcerfWc";
const SCHEDULER = "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA";
const AUTHORITY = "fcoN_xJeisVsPXA-trzVAuIiqO3ydLQxM-L4XbrQKzY";

export default class AoFormGenerator {
  projectPath: string;
  processName: string;
  packageManager: PackageManager;
  processType: string;

  constructor({
    projectPath,
    processName,
    packageManager,
    processType,
  }: {
    projectPath: string;
    processName: string;
    packageManager: PackageManager;
    processType: string;
  }) {
    this.projectPath = projectPath;
    this.processName = processName;
    this.packageManager = packageManager;
    this.processType = processType;
  }

  async generateAoFormYaml() {
    const module = ["lua-sqlite", "teal-sqlite"].includes(this.processType)
      ? MODULE_SQLITE
      : MODULE_BASIC;

    const doc = new Document([
      {
        name: this.processName,
        file: "build/process.lua",
        scheduler: SCHEDULER,
        module: module,
        tags: [
          {
            name: "Authority",
            value: AUTHORITY,
          },
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
