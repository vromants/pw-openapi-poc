import { test as base } from "@playwright/test";
import { ApiClient } from "../api/core/client";

type ApiClientFixture = {
	client: ApiClient;
};
export const test = base.extend<ApiClientFixture>({
	client: async ({ defaultBrowserType }, use) => {
		await use(ApiClient.client());
	},
});

export { expect } from "@playwright/test";
