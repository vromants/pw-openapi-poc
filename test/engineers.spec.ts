import { expect, test } from "../utils/client.fixture";

test.describe("Validate engineers", () => {
	let engineerId: number;
	const name = `Test + ${Date.now()}`;
	const updatedName = `Updated name + ${Date.now()}`;

	test("Create new engineer", async ({ PREFIX_PATH }) => {
		const requestBody = [
			{
				name: name,
				experience: 1,
				favoriteTool: "playwright",
				flakinessLevel: 1,
			},
		];
		const response = await PREFIX_PATH.engineer.createEngineer(requestBody);
		engineerId = response.id;
		expect(response.name).toBe(name);
		expect(response.experience).toBe(1);
		expect(response.favoriteTool).toBe("playwright");
		expect(response.flakinessLevel).toBe("1");
		expect(response.isActive).toBe(false);
	});

	test("Get engineer by id", async ({ PREFIX_PATH }) => {
		const response = await PREFIX_PATH.engineer.getById(engineerId);
		expect(response.id).toBe(engineerId);
	});

	test("Update engineer", async ({ PREFIX_PATH }) => {
		const requestBody = {
			name: updatedName,
			experience: 2,
			favoriteTool: "cypress",
			flakinessLevel: 2,
		};
		const response = await PREFIX_PATH.engineer.updateEngineer(
			engineerId,
			requestBody,
		);
		expect(response.id).toBe(engineerId);
		expect(response.name).toBe(updatedName);
		expect(response.experience).toBe(2);
		expect(response.favoriteTool).toBe("cypress");
		expect(response.flakinessLevel).toBe("2");
		expect(response.isActive).toBe(false);
	});

	test.only("Delete engineer", async ({ PREFIX_PATH }) => {
		const response = await PREFIX_PATH.engineer.deleteEngineer(1);
		expect(response.message).toBe("Engineer removed");
	});
});
