import * as p from "@clack/prompts";
import { default as fs } from "fs-extra";
import { dirname, resolve } from "node:path";
import { setTimeout } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import pc from "picocolors";
import AoFormGenerator from "./utils/aoform.js";
import { generateScripts } from "./utils/package.js";
import {
  detectPackageManager,
  kebabcase,
  pkgManagerInstallCommand,
} from "./utils/utils.js";

export type InitParameters = { name: string };

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function init() {
  console.clear();

  await setTimeout(1000);

  p.intro(`${pc.bgCyan(pc.black(" create-ao-dapp "))}`);

  const project = await p.group(
    {
      projectName: () =>
        p.text({
          message: "Enter the name of your project",
          placeholder: "sparkling-solid",
        }),
      type: ({ results }) =>
        p.select({
          message: `Pick a starter template within "${results.projectName}"`,
          initialValue: "lua",
          maxItems: 5,
          options: [
            { value: "lua", label: "Basic Lua template (Counter)" },
            { value: "lua-coin-with-bonding-curve", label: "Basic Lua template (Bonding Curve)" },
            {
              value: "lua-sqlite",
              label: "Lua + SQLite template (Books Manager)",
            },
            {
              value: "teal",
              label: "Teal Typed Lua template (Counter)",
            },
            {
              value: "teal-sqlite",
              label: "Teal + SQLite (Books Manager)",
            },
          ],
        }),
      // Bonding curve specific parameters
      targetMarketCap: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the target market cap in qAR",
            placeholder: "1000000",
            validate: (value) => {
              if (isNaN(Number(value)) || Number(value) <= 0) {
                return "Please enter a valid positive number";
              }
            }
          })
          : Promise.resolve(),
      targetSupply: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the target supply",
            placeholder: "1000000",
            validate: (value) => {
              if (isNaN(Number(value)) || Number(value) <= 0) {
                return "Please enter a valid positive number";
              }
            }
          })
          : Promise.resolve(),
      reserveRatio: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the reserve ratio (0-100)",
            placeholder: "50",
            validate: (value) => {
              const num = Number(value);
              if (isNaN(num) || num < 0 || num > 100) {
                return "Please enter a number between 0 and 100";
              }
            }
          })
          : Promise.resolve(),
      transactionFees: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the transaction fees percentage (0-100)",
            placeholder: "0.3",
            validate: (value) => {
              const num = Number(value);
              if (isNaN(num) || num < 0 || num > 100) {
                return "Please enter a number between 0 and 100";
              }
            }
          })
          : Promise.resolve(),
      curveTokenProcess: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the curve token process name",
            placeholder: "my-token-process"
          })
          : Promise.resolve(),
      curveTokenTicker: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the curve token ticker",
            placeholder: "TKN"
          })
          : Promise.resolve(),
      curveTokenDenomination: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the curve token denomination",
            placeholder: "credits",
            validate: (value) => {
              if (!value.trim()) {
                return "Denomination cannot be empty";
              }
            }
          })
          : Promise.resolve(),
      developerAccount: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the developer account address",
            placeholder: "0x...",
            validate: (value) => {
              if (!value.trim()) {
                return "Developer account cannot be empty";
              }
            }
          })
          : Promise.resolve(),
      lpTokensBurnRatio: ({ results }) =>
        results.type === "lua-coin-with-bonding-curve"
          ? p.text({
            message: "Enter the LP tokens burn ratio (0-100)",
            placeholder: "0",
            validate: (value) => {
              const num = Number(value);
              if (isNaN(num) || num < 0 || num > 100) {
                return "Please enter a number between 0 and 100";
              }
            }
          })
          : Promise.resolve(),
      tools: () =>
        p.multiselect({
          message: "Select the features you want to include",
          initialValues: ["testing", "permaweb-deploy"],
          options: [
            {
              value: "testing",
              label: "AO Process Testing",
              hint: "recommended",
            },
            {
              value: "permaweb-deploy",
              label: "Permaweb Deployment",
            },
            /*{ value: "gh-action", label: "GitHub Actions" }, */
          ],
          required: false,
        }),
      amalgamation: () =>
        p.select({
          message: "Select the amalgamation strategy",
          initialValue: "amalg.lua",
          options: [
            { value: "amalg.lua", label: "amalg.lua", hint: "recommended" },
          ],
        }),
    },
    {
      onCancel: () => {
        p.cancel("Operation cancelled.");
        process.exit(0);
      },
    }
  );

  // Change projectName and processName to kebab-case
  const projectName = kebabcase(project.projectName);
  const processName = ["lua", "teal"].includes(project.type as string)
    ? "counter"
    : "books";

  const templatesDir = resolve(__dirname, "..", "templates");
  const destDir = resolve(process.cwd(), projectName);

  // Copy base template contents
  fs.copySync(resolve(templatesDir, "base"), destDir);

  // Remove utils/inject-process.ts from the project
  fs.removeSync(resolve(destDir, "utils", "inject-process.ts"));

  // Process template base /templates/ao/{type}/{squishy/basic}
  const processTemplateBase = resolve(
    templatesDir,
    "ao",
    project.type as string,
    "base"
  );

  // Copy process template contents
  fs.copySync(processTemplateBase, resolve(destDir, "ao", processName));

  // Inject build script into the process dir
  const buildSpinner = p.spinner();
  buildSpinner.start("Adding build script...");

  const baseType = ["teal", "teal-sqlite"].includes(project.type as string)
    ? "teal"
    : "lua";

  // Copy the build-lua script
  fs.copySync(
    resolve(templatesDir, "scripts", `build-${baseType}.sh`),
    resolve(destDir, "ao", processName, "scripts", "build-lua.sh")
  );

  // Copy the build script
  fs.copySync(
    resolve(templatesDir, "scripts", "build.sh"),
    resolve(destDir, "ao", processName, "scripts", "build.sh")
  );

  // Copy the check_deps script
  fs.copySync(
    resolve(templatesDir, "scripts", `check_deps-${baseType}.sh`),
    resolve(destDir, "ao", processName, "scripts", "check_deps.sh")
  );

  // Copy the install_deps script
  fs.copySync(
    resolve(templatesDir, "scripts", `install_deps-${baseType}.sh`),
    resolve(destDir, "ao", processName, "scripts", "install_deps.sh")
  );

  buildSpinner.stop("Added build script.");

  // Inject testing suite into the project
  if (project.tools.includes("testing")) {
    const spinner = p.spinner();
    spinner.start("Adding testing suite...");

    // Add testing suite
    // Testing suite template is stored in /templates/ao/{type}/test-suite
    fs.copySync(
      resolve(templatesDir, "ao", project.type as string, "test-suite"),
      resolve(destDir, "ao", processName, "src", "test")
    );

    // Add test.sh script
    fs.copySync(
      resolve(templatesDir, "scripts", "test.sh"),
      resolve(destDir, "ao", processName, "scripts", "test.sh")
    );

    spinner.stop("Added testing suite.");
  }

  // Inject AOFORM into the project
  const spinner = p.spinner();
  spinner.start("Adding aoform...");

  const aoFormGenerator = new AoFormGenerator({
    projectPath: `./${projectName}`,
    processName: processName,
    packageManager: detectPackageManager(),
    processType: project.type as string,
  });

  spinner.message("Generating aoform.yaml...");

  await aoFormGenerator.generateAoFormYaml();

  spinner.message("Adding deploy script...");

  await aoFormGenerator.addDeployScript();

  spinner.stop("Added aoform.");

  // Copy frontend template contents
  const frontendTemplate = ["lua", "teal"].includes(project.type as string)
    ? "lua"
    : "lua-sqlite";

  fs.copySync(
    resolve(templatesDir, "apps", frontendTemplate),
    resolve(destDir, "apps", "frontend")
  );

  // Replace dotfiles
  for (const file of fs.readdirSync(destDir)) {
    if (!file.startsWith("_")) continue;
    fs.renameSync(
      resolve(destDir, file),
      resolve(destDir, `.${file.slice(1)}`)
    );
  }

  // Replace package.json properties
  const pkgJson = fs.readJsonSync(resolve(destDir, "package.json"));
  pkgJson.scripts = generateScripts({
    scripts: pkgJson.scripts,
    processName,
    aoform: true,
    testing: project.tools.includes("testing"),
    packageManager: detectPackageManager(),
  });
  pkgJson.name = projectName;
  fs.writeJsonSync(resolve(destDir, "package.json"), pkgJson, { spaces: 2 });

  // Wrap up
  p.log.success(`Project successfully scaffolded in ${pc.blue(destDir)}!`);

  const pkgManager = detectPackageManager();

  p.log.message("Next steps:");
  p.log.step(`1. ${pc.blue(`cd ./${projectName}`)} - Navigate to project`);
  p.log.step(
    `2. ${pc.blue(pkgManagerInstallCommand(pkgManager))} - Install dependencies`
  );

  p.outro("Happy developing! 🚀");
}
