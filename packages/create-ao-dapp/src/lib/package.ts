import { readFile, writeFile } from "node:fs/promises";

type Props = {
	processName: string;
	projectPath: string;
	aoform: boolean;
	testing: boolean;
	packageManager: "bun" | "pnpm" | "yarn" | "npm";
};

export async function generatePackageJsonScripts({
	processName,
	projectPath,
	aoform,
	testing,
	packageManager,
}: Props) {
	const packageJsonFile = await readFile(
		`${projectPath}/package.json`,
		"utf-8",
	);
	const packageJson = JSON.parse(packageJsonFile);

	// Generate process:deploy script
	if (aoform) {
		packageJson.scripts[`${processName}:deploy`] =
			`cd ./ao/${processName} && ./scripts/deploy.sh`;
	} else {
		packageJson.scripts[`${processName}:deploy`] =
			"echo 'AOForm not installed. Manually deploy process through aos.' && exit 1";
	}

	// Generate process:test script
	if (testing) {
		packageJson.scripts[`${processName}:test`] =
			`cd ./ao/${processName} && ./scripts/test.sh`;
	} else {
		packageJson.scripts[`${processName}:test`] =
			"echo 'Testing suite not installed.' && exit 1";
	}

	// Generate process:build script
	packageJson.scripts[`${processName}:build`] =
		`cd ./ao/${processName} && ./scripts/build.sh`;

	// Generate inject:processes script
	packageJson.scripts[`${processName}:inject`] =
		`STATE_FILE=./ao/${processName}/state-aoform.yaml node ./utils/inject-process.ts`;

	// Generate frontend scripts
	packageJson.scripts["frontend:dev"] =
		`cd ./apps/frontend && ${packageManager} run dev`;
	packageJson.scripts["frontend:build"] =
		`cd ./apps/frontend && ${packageManager} run build`;

	return await writeFile(
		`${projectPath}/package.json`,
		JSON.stringify(packageJson, null, 2),
	);
}
