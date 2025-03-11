import { execSync } from "node:child_process";
import { CONFIG } from "@api-config";

async function globalSetup(/** config: FullConfig */) {
	execSync(
		`npx openapi-typescript ${CONFIG.SWAGGER_URL} --output ./.temp/types.ts`,
		{ stdio: "inherit" },
	);
}

export default globalSetup;
