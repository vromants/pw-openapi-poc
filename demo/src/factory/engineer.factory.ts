import * as Factory from "factory.ts";
import { AqaEngineer } from '../entity/aqa-engineer.entity';
import * as Chance from 'chance';
const chance = new Chance();

export const engineerFactory = Factory.Sync.makeFactory<Omit<AqaEngineer, "id">>({
    experience: Factory.each((i) => chance.natural({min: 1, max: 25})),
    favoriteTool: Factory.each(() => chance.pickone(['Playwright', 'Cypress', 'Webdriver.io', 'CodeceptJs'])),
    flakinessLevel: Factory.each((i) => chance.natural({min: 1, max: 10})),
    isActive: true,
    name: Factory.each((i) => chance.name()),
});
