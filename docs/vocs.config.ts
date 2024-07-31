import { defineConfig } from "vocs";
import { version } from "./package.json";

const REPO_URL = "https://github.com/Autonomous-Finance/ao-starter-kit";

export default defineConfig({
  theme: {
    accentColor: {
      light: "black",
      dark: "white",
    },
  },
  title: "AO Starter Kit",
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
      text: "Project Structure",
      link: "/project-structure",
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
          text: "Building with Squish",
          link: "/process-development/building",
        },
        {
          text: "Deployment",
          link: "/process-development/deployment",
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
          link: `${REPO_URL}/create-ao-dapp/CHANGELOG.md`,
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