import type { PackageManager } from "../types";

type GenerateScriptsProps = {
  scripts: {
    [key: string]: string;
  };
  processName: string;
  aoform: boolean;
  testing: boolean;
  packageManager: PackageManager;
};

export function generateScripts({
  scripts,
  processName,
  aoform,
  testing,
  packageManager,
}: GenerateScriptsProps) {
  // Generate process:deploy script
  if (aoform) {
    scripts[`${processName}:deploy`] = `cd ./ao/${processName} && ./scripts/deploy.sh`;
  } else {
    scripts[`${processName}:deploy`] =
      "echo 'AOForm not installed. Manually deploy process through aos.' && exit 1";
  }

  // Generate process:test script
  if (testing) {
    scripts[`${processName}:test`] = `cd ./ao/${processName} && ./scripts/test.sh`;
  } else {
    scripts[`${processName}:test`] = "echo 'Testing suite not installed.' && exit 1";
  }

  // Generate process:build script
  scripts[`${processName}:build`] = `cd ./ao/${processName} && ./scripts/build.sh`;

  // Generate inject:processes script
  scripts[`${processName}:inject`] =
    `STATE_FILE=./ao/${processName}/state-aoform.yaml node ./utils/inject-process.ts`;

  // Generate frontend scripts
  scripts["frontend:dev"] = `cd ./apps/frontend && ${packageManager} run dev`;
  scripts["frontend:build"] = `cd ./apps/frontend && ${packageManager} run build`;

  return scripts;
}
