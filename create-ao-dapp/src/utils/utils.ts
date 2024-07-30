import type { PackageManager } from "../types";

export function detectPackageManager(): PackageManager {
  const userAgent = process.env.npm_config_user_agent;
  if (!userAgent) return "npm";
  if (userAgent.includes("bun")) return "bun";
  if (userAgent.includes("yarn")) return "yarn";
  if (userAgent.includes("pnpm")) return "pnpm";
  if (userAgent.includes("npm")) return "npm";
  return "npm";
}

export function pkgManagerInstallCommand(pkgManager: PackageManager) {
  if (pkgManager === "bun") return "bun install";
  if (pkgManager === "yarn") return "yarn";
  if (pkgManager === "pnpm") return "pnpm install";
  return "npm install";
}

export function pkgManagerRunCommand(pkgManager: PackageManager, command: string) {
  if (pkgManager === "bun") return `bun run ${command}`;
  if (pkgManager === "yarn") return `yarn ${command}`;
  if (pkgManager === "pnpm") return `pnpm ${command}`;
  return `npm run ${command}`;
}

export function kebabcase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}