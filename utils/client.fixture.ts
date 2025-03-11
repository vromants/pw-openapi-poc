import { test as base } from "@playwright/test";
import { ApiClient } from "../api/core/client";

type ApiClientFixture = {
	v4Client: ApiClient;
	v2Client: ApiClient;
	v1Client: ApiClient;
};
export const test = base.extend<ApiClientFixture>({
	v4Client: async ({ defaultBrowserType }, use) => {
		await use(ApiClient.v4Client());
	},
	v2Client: async ({ defaultBrowserType }, use) => {
		await use(ApiClient.v2Client());
	},
	v1Client: async ({ defaultBrowserType }, use) => {
		await use(ApiClient.v1Client());
	},
});

export { expect } from "@playwright/test";
