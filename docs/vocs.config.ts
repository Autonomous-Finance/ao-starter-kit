import { defineConfig } from "vocs";

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
					link: "/deployment",
				},
			],
		},
	],
});
