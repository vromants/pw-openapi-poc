import { test as base } from "@playwright/test";
import { ApiClient } from "../api/core/client";

type ApiClientFixture = {
	PREFIX_PATH: ApiClient;
};
export const test = base.extend<ApiClientFixture>({
	PREFIX_PATH: async ({ defaultBrowserType }, use) => {
		await use(ApiClient.client());
	},
});

export { expect } from "@playwright/test";
