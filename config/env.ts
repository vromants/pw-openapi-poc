import { url, cleanEnv, str } from "envalid";

export const CONFIG = cleanEnv(process.env, {
	BASE_URL: url({
		default: "http://localhost:3000/",
		desc: "API URL to be tested",
	}),
	PREFIX_PATH: str({
		default: "",
		desc: "Prefix part in url path to be prepended to all requests",
	}),
	SWAGGER_URL: url({
		default: "http://localhost:3000/json",
		desc: "URL to SWAGGER JSON to be tested",
	}),
});
