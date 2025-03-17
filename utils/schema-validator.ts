import * as assert from "node:assert";
import { CONFIG } from "@api-config";
import SwaggerParser from "@apidevtools/swagger-parser";
import OpenAPIResponseValidator from "openapi-response-validator";
import type { OpenAPI } from "openapi-types";
import { step } from "./step";

export class SchemaValidator {
	private cachedApi: OpenAPI.Document | null = null;
	constructor(
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		readonly response: any,
		readonly url: string,
		readonly statusCode: number,
		readonly method: string,
	) {}

	async getFullSchema(): Promise<OpenAPI.Document> {
		if (this.cachedApi === null) {
			this.cachedApi = await SwaggerParser.dereference(CONFIG.SWAGGER_URL);
		}
		return this.cachedApi;
	}

	private matchUrlWithPattern(url: string, patterns: string[]) {
		// Normalize URL (ensure leading slash, remove trailing slash, and version prefix)
		url = `/${url.replace(/^\/|\/$/g, "").replace(/^v\d+\//, "")}`;

		for (const pattern of patterns) {
			// Normalize pattern and create regex
			const regex = new RegExp(
				`^${pattern
					.replace(/\/$/, "") // Remove trailing slash
					.replace(/\*\*/g, ".*") // Wildcards to match any characters
					.replace(/{[^/]+}/g, "[^/]+")}/?$`, // Placeholders to match dynamic segments
			);

			if (regex.test(url)) return pattern.replace(/\/$/, ""); // Return matched pattern
		}

		console.error("No match found");
		return new Error("Url not found in paths");
	}


	async getRequestSchema() {
		const schema = await this.getFullSchema();
		const path = this.matchUrlWithPattern(
			this.url,
			Object.keys(schema.paths),
		) as string;
		const responseSchemaObj = schema.paths[path][this.method.toLowerCase()];
		return { ...responseSchemaObj };
	}

	@step("Schema validations")
	async validate() {
		const requestSchema = await this.getRequestSchema();
		const validator = new OpenAPIResponseValidator(requestSchema);
		const err = validator.validateResponse(this.statusCode, this.response);
		assert.equal(err, undefined);
	}
}
