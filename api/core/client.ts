import { CONFIG } from "@api-config";
import type { ControllerOptions } from "../contoller/base.controller";
import { PetController } from "../contoller/pet/pet.controller";

export class ApiClient {
	readonly pet: PetController;

	constructor(options?: Partial<ControllerOptions>) {
		const defaultOptions = {
			prefixUrl: CONFIG.BASE_URL,
			prefixPath: CONFIG.V2_PREFIX_PATH,
		};
		const mergedOptions = {
			...defaultOptions,
			...options,
		};
		this.pet = new PetController(mergedOptions);
	}

	static v2Client() {
		return new ApiClient({ prefixPath: CONFIG.V2_PREFIX_PATH });
	}
}
