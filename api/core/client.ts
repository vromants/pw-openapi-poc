import { CONFIG } from "@api-config";
import type { ControllerOptions } from "../contoller/base.controller";
import { StoreController } from "../contoller/store/store.controller";

export class ApiClient {
	readonly store: StoreController;

	constructor(options?: Partial<ControllerOptions>) {
		const defaultOptions = {
			prefixUrl: CONFIG.BASE_URL,
			prefixPath: CONFIG.V2_PREFIX_PATH,
		};
		const mergedOptions = {
			...defaultOptions,
			...options,
		};
		this.store = new StoreController(mergedOptions);
	}

	static v2Client() {
		return new ApiClient({ prefixPath: CONFIG.V2_PREFIX_PATH });
	}
}
