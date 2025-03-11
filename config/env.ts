import { url, cleanEnv, str } from "envalid";

export const CONFIG = cleanEnv(process.env, {
	BASE_URL: url({
		default: "<base_url>",
		desc: "API URL to be tested",
	}),
	V4_PREFIX_PATH: str({
		default: "api/v4/",
		desc: "Prefix part in url path to be prepended to all requests",
	}),
	V2_PREFIX_PATH: str({
		default: "api/v2/",
		desc: "Prefix part in url path to be prepended to all requests",
	}),
	V1_PREFIX_PATH: str({
		default: "api/v1/",
		desc: "Prefix part in url path to be prepended to all requests",
	}),
	SWAGGER_URL: url({
		default: "<some-docs-url>api-docs",
		desc: "URL to SWAGGER JSON to be tested",
	}),
});
