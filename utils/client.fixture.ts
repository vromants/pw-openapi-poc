import { test as base } from "@playwright/test";
import { ApiClient } from "../api/core/client";

type ApiClientFixture = {
	v2Client: ApiClient;
};
export const test = base.extend<ApiClientFixture>({
	v2Client: async ({ defaultBrowserType }, use) => {
		await use(ApiClient.v2Client());
	},
});

export { expect } from "@playwright/test";
