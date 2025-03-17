import { Chance } from "chance";
import * as Factory from "factory.ts";

const chance = new Chance();

type Entity = {
	some: string;
};

export const entityFactory = Factory.Sync.makeFactory<Entity>({
	some: undefined,
});
