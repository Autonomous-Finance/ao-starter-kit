#! /usr/bin/env bun

import * as p from "@clack/prompts";
import { setTimeout } from "node:timers/promises";
import color from "picocolors";

import { $ } from "zx";
import AoFormGenerator from "./lib/aoform";
import { generatePackageJsonScripts } from "./lib/package";

const AO_STARTER_KIT_REPO =
	"https://github.com/Autonomous-Finance/ao-starter-kit";
const STARTER_KIT_BRANCH = "dev";

type PackageManagerOptions = "bun" | "pnpm" | "yarn" | "npm";

async function main() {
	try {
		console.clear();

		await setTimeout(1000);

		p.intro(`${color.bgCyan(color.black(" create-app "))}`);

		const project = await p.group(
			{
				path: () =>
					p.text({
						message: "Where should we create your project?",
						placeholder: "./sparkling-solid",
						validate: (value) => {
							if (!value) return "Please enter a path.";
							if (value[0] !== ".") return "Please enter a relative path.";
						},
					}),
				packageManager: () =>
					p.select({
						message: "Select a package manager",
						initialValue: "bun",
						options: [
							{ value: "bun", label: "bun" },
							{ value: "pnpm", label: "pnpm" },
							{ value: "yarn", label: "yarn" },
							{ value: "npm", label: "npm" },
						],
					}),
				processName: () =>
					p.text({
						message: "What should we name the backend process?",
						placeholder: "my-process",
						validate: (value) => {
							if (!value) return "Please enter a name.";
							// Check that the name is a valid Lua identifier
							if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(value))
								return "Please enter a valid Lua identifier.";
						},
					}),
				type: ({ results }) =>
					p.select({
						message: `Pick a process type within "${results.path}"`,
						initialValue: "lua",
						maxItems: 5,
						options: [
							{ value: "lua", label: "Lua process" },
							{ value: "teal", label: "Teal Typed Lua process" },
						],
					}),
				tools: () =>
					p.multiselect({
						message: "Select the features you want to include",
						initialValues: ["aoform", "squishy"],
						options: [
							{ value: "aoform", label: "aoform", hint: "recommended" },
							{ value: "squishy", label: "Squishy", hint: "recommended" },
							{
								value: "testing",
								label: "AO Process Testing",
								hint: "recommended",
							},
							{
								value: "irys-permaweb-deploy",
								label: "Irys Permaweb Deployment",
							},
							{ value: "gh-action", label: "GitHub Actions" },
						],
						required: false,
					}),
				frontend: ({ results }) =>
					p.select({
						message: `Pick a frontend framework within "${results.path}"`,
						initialValue: "vite",
						options: [{ value: "vite", label: "React Vite" }],
					}),
				initRepo: () =>
					p.confirm({
						message: "Initialize a git repository?",
						initialValue: true,
					}),
			},
			{
				onCancel: () => {
					p.cancel("Operation cancelled.");
					process.exit(0);
				},
			},
		);

		const cloneSpinner = p.spinner();

		cloneSpinner.start("Cloning template repository...");

		const tempPath = `${project.path}-temp`;

		// clone the starter kit to temp path
		await $`git clone --single-branch --branch ${STARTER_KIT_BRANCH} ${AO_STARTER_KIT_REPO} ${tempPath}`;

		const templatePath = project.tools.includes("squishy")
			? "squishy"
			: "basic";

		// move the base template to the project path
		await $`mv ${tempPath}/templates/base ${project.path}`;

		// move the process template to the project path /ao/{processName}
		// templates are stored in /templates/ao/{type}/{template}
		await $`mv ${tempPath}/templates/ao/${project.type}/${templatePath} ${project.path}/ao/${project.processName}`;

		// move the frontend template to the project path
		// templates are stored in /templates/apps/{frontend}
		await $`mv ${tempPath}/templates/apps/${project.frontend} ${project.path}/apps/frontend`;

		cloneSpinner.stop("Finished cloning base template.");

		// Install dependencies
		const installDependenciesSpinner = p.spinner();
		installDependenciesSpinner.start("Installing dependencies...");

		await $`cd ${project.path} && ${project.packageManager} install`;

		installDependenciesSpinner.stop("Finished installing dependencies.");

		// Create process scripts dir
		const createScriptsDirSpinner = p.spinner();
		createScriptsDirSpinner.start("Creating process scripts dir...");

		await $`mkdir -p ${project.path}/ao/${project.processName}/scripts`;

		createScriptsDirSpinner.stop("Finished creating process scripts dir.");

		// Inject AOFORM into the project
		if (project.tools.includes("aoform")) {
			const spinner = p.spinner();
			spinner.start("Adding aoform...");

			const aoFormGenerator = new AoFormGenerator({
				projectPath: project.path,
				processName: project.processName,
			});

			await aoFormGenerator.installAoForm();

			spinner.message("Generating aoform.yaml...");

			await aoFormGenerator.generateAoFormYaml();

			spinner.message("Adding deploy script...");

			await aoFormGenerator.addDeployScript();

			spinner.stop("Added aoform.");
		}

		// Inject testing suite into the project
		if (project.tools.includes("testing")) {
			const spinner = p.spinner();
			spinner.start("Adding testing suite...");

			// Add testing suite
			// Testing suite template is stored in /templates/ao/{type}test-suite
			await $`mv ${tempPath}/templates/ao/${project.type}/test-suite ${project.path}/ao/${project.processName}/src/test`;

			// Add test.sh script
			await $`mv ${tempPath}/templates/scripts/test.sh ${project.path}/ao/${project.processName}/scripts/test.sh`;

			spinner.stop("Added testing suite.");
		}

		// Inject build script into the process dir
		const buildSpinner = p.spinner();
		buildSpinner.start("Adding build script...");

		const buildScriptPath = project.tools.includes("squishy")
			? "build-squishy.sh"
			: "build-basic.sh";

		await $`mv ${tempPath}/templates/scripts/${buildScriptPath} ${project.path}/ao/${project.processName}/scripts/build.sh`;

		buildSpinner.stop("Added build script.");

		// Remove the temp dir
		const removeSpinner = p.spinner();
		removeSpinner.start("Removing temp dir...");

		await $`rm -rf ${project.path}-temp`;

		removeSpinner.stop("Finished removing temp dir.");

		// Generate package.json scripts
		const scriptsSpinner = p.spinner();
		scriptsSpinner.start("Generating package.json scripts...");

		await generatePackageJsonScripts({
			projectPath: project.path,
			packageManager: project.packageManager as PackageManagerOptions,
			processName: project.processName,
			aoform: project.tools.includes("aoform"),
			testing: project.tools.includes("testing"),
		});

		scriptsSpinner.stop("Finished generating package.json scripts.");

		// Initialize git repository
		if (project.initRepo) {
			const gitSpinner = p.spinner();
			gitSpinner.start("Initializing git repository...");

			await $`cd ${project.path} && git init`;

			gitSpinner.stop("Finished initializing git repository.");
		}

		p.note(`Project created at ${color.underline(color.cyan(project.path))}`);

		/* const nextSteps = `cd ${project.path}        \n${project.install ? "" : "pnpm install\n"}pnpm dev`;

		p.note(nextSteps, "Next steps."); */

		p.outro(
			`Problems? ${color.underline(color.cyan("https://example.com/issues"))}`,
		);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
}

main().catch(console.error);
