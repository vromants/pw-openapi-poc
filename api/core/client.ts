import { CONFIG } from "@api-config";
import type { ControllerOptions } from "../contoller/base.controller";
import { EngineerController } from "../contoller/engineer/engineer.controller";

export class ApiClient {
	readonly engineer: EngineerController;

	constructor(options?: Partial<ControllerOptions>) {
		const defaultOptions = {
			prefixUrl: CONFIG.BASE_URL,
			prefixPath: CONFIG.PREFIX_PATH,
		};
		const mergedOptions = {
			...defaultOptions,
			...options,
		};
		this.engineer = new EngineerController(mergedOptions);
	}

	static client() {
		return new ApiClient({ prefixPath: CONFIG.PREFIX_PATH });
	}
}
