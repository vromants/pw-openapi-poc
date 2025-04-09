import type { components } from "../../../.temp/types";
import { step } from "../../../utils/step";
import type { createEngineerReq, updateEngineerReq } from "../../type/types";
import { BaseController } from "../base.controller";

export class EngineerController extends BaseController {
	private commonHeaders = {
		"Content-Type": "application/json",
	};

	@step("[engineerController] createEngineer")
	async createEngineer(data: createEngineerReq, respCode = 201) {
		const { body } = await this.request()
			.url("aqa-engineers")
			.headers(this.commonHeaders)
			.method("POST")
			.body(data)
			.send<components["schemas"]["GetEngineerDto"]>(respCode);
		return body;
	}

	@step("[engineerController] getById")
	async getById(id: string, expStatus = 200) {
		return (
			await this.request()
				.url(`aqa-engineers/${id}`)
				.headers(this.commonHeaders)
				.send<components["schemas"]["GetEngineerDto"]>(expStatus)
		).body;
	}

	@step("[engineerController] updateEngineer")
	async updateEngineer(id: string, data: updateEngineerReq, respCode = 200) {
		const { body } = await this.request()
			.url(`aqa-engineers/${id}`)
			.headers(this.commonHeaders)
			.method("PUT")
			.body(data)
			.send<components["schemas"]["GetEngineerDto"]>(respCode);
		return body;
	}

	@step("[engineerController] deleteEngineer")
	async deleteEngineer(id: string, expStatus = 200) {
		return (
			await this.request()
				.url(`aqa-engineers/${id}`)
				.method("DELETE")
				.headers(this.commonHeaders)
				.send<"">(expStatus)
		).body;
	}
}
