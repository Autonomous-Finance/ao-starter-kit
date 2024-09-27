import * as React from "react";

import { defineConfig } from "./src/index.js";
import { version } from "./create-ao-dapp/package.json";

const REPO_URL = "https://github.com/Autonomous-Finance/ao-starter-kit";

export default defineConfig({
  theme: {
    accentColor: {
      light: "black",
      dark: "white",
    },
  },
  rootDir: "site",
  basePath: "/",
  title: "Create AO dApp",
  logoUrl: "Create AO dApp",
  ogImageUrl: "https://create-ao-dapp.ar.io/og.png",
  sidebar: [
    {
      text: "Introduction",
      link: "/introduction",
    },
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Available Templates",
      collapsed: false,
      items: [
        {
          text: "Basic Lua template",
          link: "/templates/lua",
        },
        {
          text: "Lua + SQLite template",
          link: "/templates/lua-sqlite",
        },
        {
          text: "Teal Typed Lua template",
          link: "/templates/teal",
        },
        {
          text: "Teal + SQLite template",
          link: "/templates/teal-sqlite",
        },
      ],
    },
    {
      text: "AO Process Development",
      collapsed: false,
      items: [
        {
          text: "Architecture",
          link: "/process-development/architecture",
        },
        {
          text: "Writing AO Processes",
          link: "/process-development/process-design",
        },
        {
          text: "AO Process Testing",
          link: "/process-development/testing",
        },
        {
          text: "Building AO Processes",
          collapsed: false,
          items: [
            {
              text: "Building with amalg.lua",
              link: "/process-development/building-with-amalg",
            },
            {
              text: "Building with Squish",
              link: "/process-development/building-with-squish",
            },
          ],
        },
        {
          text: "Deployment",
          link: "/process-development/deployment",
        },
      ],
    },
    {
      text: "Frontend Development",
      collapsed: false,
      items: [
        {
          text: "Architecture",
          link: "/frontend-development/architecture",
        },
        {
          text: "Connecting to the Backend",
          link: "/frontend-development/connecting-to-backend",
        },
        {
          text: "Building the Frontend",
          link: "/frontend-development/building",
        },
        {
          text: "Permaweb Deployment",
          link: "/frontend-development/permaweb-deployment",
        },
      ],
    },
  ],
  topNav: [
    { text: "Documentation", link: "/introduction" },
    {
      text: `v${version}`,
      items: [
        {
          text: "Changelog",
          link: `${REPO_URL}/blob/main/create-ao-dapp/CHANGELOG.md`,
        },
        {
          text: "Contributing",
          link: `${REPO_URL}/blob/main/.github/CONTRIBUTING.md`,
        },
      ],
    },
    { text: "Examples", link: `${REPO_URL}/tree/main/examples/` },
    { text: "GitHub", link: REPO_URL },
  ],
});
