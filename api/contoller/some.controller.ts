import type { components } from "../../../../.temp/types";
import { step } from "../../utils/step";
import type { ReqId } from "../type/types";
import { BaseController } from "./base.controller";

export class SomeController extends BaseController {
	private commonHeaders = {
		//
	};

	@step("[CampaignController] getById")
	async getById(id: ReqId, expStatus = 200) {
		return (
			await this.request()
				.url(`someEntity/${id}`)
				.headers(this.commonHeaders)
				.send<components["schemas"]["someEntity"]>(expStatus)
		).body;
	}
}
