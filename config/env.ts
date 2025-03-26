import { url, cleanEnv, str } from "envalid";

export const CONFIG = cleanEnv(process.env, {
	BASE_URL: url({
		default: "https://petstore31.swagger.io/",
		desc: "API URL to be tested",
	}),
	V31_PREFIX_PATH: str({
		default: "api/v31/",
		desc: "Prefix part in url path to be prepended to all requests",
	}),
	SWAGGER_URL: url({
		default: "https://petstore31.swagger.io/api/v31/openapi.json",
		desc: "URL to SWAGGER JSON to be tested",
	}),
});
