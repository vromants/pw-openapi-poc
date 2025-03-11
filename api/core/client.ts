import { CONFIG } from "@api-config";
import type { ControllerOptions } from "../contoller/base.controller";
import { CampaignController } from "../contoller/micro-app/booking";
import { AdGroupController } from "../contoller/micro-app/booking/adGroup.controller";
import { KeywordsController } from "../contoller/micro-app/booking/keywords.controller";
import { AdsController } from "../contoller/micro-app/reporting/ads.controller";
import { CreativeController } from "../contoller/micro-app/reporting/creative.controller";

export class ApiClient {
	readonly campaign: CampaignController;
	readonly ads: AdsController;
	readonly adGroup: AdGroupController;
	readonly creative: CreativeController;
	readonly keywords: KeywordsController;

	constructor(options?: Partial<ControllerOptions>) {
		const defaultOptions = {
			prefixUrl: CONFIG.R4_URL,
			prefixPath: CONFIG.V4_PREFIX_PATH,
		};
		const mergedOptions = {
			...defaultOptions,
			...options,
		};
		this.campaign = new CampaignController(mergedOptions);
		this.ads = new AdsController(mergedOptions);
		this.adGroup = new AdGroupController(mergedOptions);
		this.creative = new CreativeController(mergedOptions);
		this.keywords = new KeywordsController(mergedOptions);
	}

	static v4Client() {
		return new ApiClient();
	}

	static v2Client() {
		return new ApiClient({ prefixPath: CONFIG.V2_PREFIX_PATH });
	}

	static v1Client() {
		return new ApiClient({ prefixPath: CONFIG.V1_PREFIX_PATH });
	}
}
