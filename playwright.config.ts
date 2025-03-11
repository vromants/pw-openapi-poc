import fs from "node:fs";
import path from "node:path";
import type { PlaywrightTestConfig } from "@playwright/test";

export const outputDir = path.resolve(process.cwd(), "./test-results");
const microAppPath = "./test/microapp/";

function generateProjects(testsPath: string) {
	const items = fs.readdirSync(testsPath);
	return items
		.filter((item) => fs.statSync(path.join(testsPath, item)).isDirectory())
		.map((dirName) => ({
			name: dirName,
			testDir: `${testsPath}${dirName}/`,
		}));
}

const config: PlaywrightTestConfig = {
	fullyParallel: true,
	workers: 4,
	forbidOnly: process.env.CI ? true : undefined,
	timeout: 2 * 60 * 1000, // 5 minutes
	globalSetup: "utils/generate-typings.ts",
	reporter: [
		["list"],
		["html", { open: "never" }],
		["junit", { outputFile: `${outputDir}/junit-results.xml` }],
	],
	use: {
		screenshot: "off",
		video: "off",
		trace: {
			mode: "off",
		},
	},
	projects: [...generateProjects(microAppPath)],
};

export default config;
