import type { operations } from "../../../.temp/types";
import { step } from "../../../utils/step";
import type { petReq } from "../../type/types";
import { BaseController } from "../base.controller";

export class PetController extends BaseController {
    private commonHeaders = {
        "Content-Type": "application/json"
    };

    @step("[petController] addPet")
    async createPet(
        data: petReq,
        respCode = 200,
    ) {
        const { body } = await this.request()
            .url(`pet`)
            .headers(this.commonHeaders)
            .method("POST")
            .body(data)
            .send<operations["addPet"]>(respCode);
        return body;
    }
}
