#!/usr/bin/env node
import { cac } from "cac";
import { createRequire } from "node:module";
import { init } from "./init.js";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const cli = cac("create-ao-dapp");

cli.usage("[options]").option("-n, --name [name]", "Name of project");

cli.help();
cli.version(pkg.version);

const { options } = cli.parse();

if (!options.help) init();
