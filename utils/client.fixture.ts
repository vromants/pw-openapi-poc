import { test as base } from "@playwright/test";
import { ApiClient } from "../api/core/client";

type ApiClientFixture = {
	V31_PREFIX_PATH: ApiClient;
};
export const test = base.extend<ApiClientFixture>({
	V31_PREFIX_PATH: async ({ defaultBrowserType }, use) => {
		await use(ApiClient.v3Client());
	},
});

export { expect } from "@playwright/test";
