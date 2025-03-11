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
		for (const pattern of patterns) {
			const regexPattern = pattern
				.replace(/\*\*/g, ".*") // Convert '**' to '.*' for wildcard matching
				.replace(/{[^/]+}/g, "[^/]+"); // Convert placeholders to regex pattern
			const regex = new RegExp(`^${regexPattern}$`);
			if (regex.test(url)) {
				return pattern;
			}
		}
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
