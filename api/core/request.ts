import { expect, request } from "@playwright/test";
import { SchemaValidator } from "../../utils/schema-validator";

export class PWRequest {
	protected options: Partial<{
		prefixUrl: string;
		url: string;
		method: string;
		headers: Record<string, string>;
		params: { [key: string]: string | number | boolean };
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		data: any;
	}> = {};

	prefixUrl(prefixUrl: string | URL): this {
		this.options.prefixUrl = prefixUrl.toString();
		return this;
	}
	url(url: string | URL): this {
		this.options.url = url.toString();
		return this;
	}
	method(method: string): this {
		this.options.method = method;
		return this;
	}
	headers(headers: Record<string, string>): this {
		this.options.headers = this.options.headers ?? {};
		this.options.headers = {
			...this.options.headers,
			...headers,
		};
		return this;
	}
	searchParams(searchParams: { [key: string]: string | number | boolean }) {
		this.options.params = searchParams;
		return this;
	}
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	body(data: any) {
		this.options.data = data;
		return this;
	}

	getPrefix() {
		return new URL(this.options.prefixUrl).pathname;
	}

	async send<T = never>(expectedStatus = 200) {
		if (this.options.url) {
			const reqContext = await request.newContext({
				baseURL: this.options.prefixUrl,
				ignoreHTTPSErrors: true,
			});

			const response = await reqContext.fetch(this.options.url, {
				...this.options,
			});

			const responseBody = await response.json();

			expect(response.status(), JSON.stringify(responseBody)).toBe(
				expectedStatus,
			);

			const schemaValidator = new SchemaValidator(
				responseBody,
				`${this.getPrefix()}${this.options.url}`,
				response.status(),
				this.options.method || "GET",
			);
			await schemaValidator.validate();

			return {
				body: responseBody as T,
				headers: response.headers(),
				status: response.status(),
			};
		}
		throw new Error(
			'[PWRequest] url is undefined, make sure you called .url("some/url") method',
		);
	}
}
