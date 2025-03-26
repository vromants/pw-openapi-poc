import type { operations } from "../../../.temp/types";
import { step } from "../../../utils/step";
import type { petReg } from "../../type/types";
import { BaseController } from "../base.controller";

export class PetController extends BaseController {
	private commonHeaders = {
		"Content-Type": "application/json",
	};

	@step("[petController] getById")
	async getById(id: number, expStatus = 200) {
		return (
			await this.request()
				.url(`pet/${id}`)
				.headers(this.commonHeaders)
				.send<operations["getPetById"]["responses"]>(expStatus)
		).body;
	}

	@step("[petController] addNewPet")
	async createPet(data: petReg, respCode = 200) {
		const { body } = await this.request()
			.url("pet")
			.headers(this.commonHeaders)
			.method("POST")
			.body(data)
			.send<operations["addPet"]["responses"]>(respCode);
		return body;
	}

	@step("[petController] updatePet")
	async updatePet(data: petReg, respCode = 200) {
		const { body } = await this.request()
			.url("pet")
			.headers(this.commonHeaders)
			.method("PUT")
			.body(data)
			.send<operations["updatePet"]["responses"]>(respCode);
		return body;
	}
}
