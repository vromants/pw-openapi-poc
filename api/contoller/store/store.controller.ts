import type { operations } from "../../../.temp/types";
import { step } from "../../../utils/step";
import type { storeReg } from "../../type/types";
import { BaseController } from "../base.controller";

export class StoreController extends BaseController {
	private commonHeaders = {
		"Content-Type": "application/json",
	};

	@step("[storeController] getById")
	async getById(id: number, expStatus = 200) {
		return (
			await this.request()
				.url(`store/order/${id}`)
				.headers(this.commonHeaders)
				.send<operations["getOrderById"]["responses"]>(expStatus)
		).body;
	}

	@step("[storeController] placeAnOrder")
	async createStore(data: storeReg, respCode = 200) {
		const { body } = await this.request()
			.url("store/order")
			.headers(this.commonHeaders)
			.method("POST")
			.body(data)
			.send<operations["placeOrder"]["responses"]>(respCode);
		return body;
	}
}
