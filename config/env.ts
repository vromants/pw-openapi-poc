import { url, cleanEnv, str } from "envalid";

export const CONFIG = cleanEnv(process.env, {
	BASE_URL: url({
		default: "https://petstore.swagger.io/",
		desc: "API URL to be tested",
	}),
	V2_PREFIX_PATH: str({
		default: "v2/",
		desc: "Prefix part in url path to be prepended to all requests",
	}),
	SWAGGER_URL: url({
		default: "https://petstore.swagger.io/v2/swagger.json",
		desc: "URL to SWAGGER JSON to be tested",
	}),
});
