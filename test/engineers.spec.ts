import { expect, test } from "../utils/client.fixture";

test.describe
	.serial("Validate engineers", () => {
		let engineerId: string;
		const name = `Test + ${Date.now()}`;
		const updatedName = `Updated name + ${Date.now()}`;

		test("Create new engineer", async ({ client }) => {
			const requestBody = {
				name: name,
				experience: 1,
				favoriteTool: "playwright",
				flakinessLevel: 1,
			};

			const response = await client.engineer.createEngineer(requestBody);
			engineerId = response.id;
			expect(response.name).toBe(name);
			expect(response.experience).toBe(1);
			expect(response.favoriteTool).toBe("playwright");
			expect(response.flakinessLevel).toBe(1);
			expect(response.isActive).toBe(true);
		});

		test("Get engineer by id", async ({ client }) => {
			const response = await client.engineer.getById(engineerId);
			expect(response.id).toBe(engineerId);
		});

		test("Update engineer", async ({ client }) => {
			const requestBody = {
				name: updatedName,
				experience: 2,
				favoriteTool: "cypress",
				flakinessLevel: 2,
			};
			const response = await client.engineer.updateEngineer(
				engineerId,
				requestBody,
			);
			expect(response.id).toBe(engineerId);
			expect(response.name).toBe(updatedName);
			expect(response.experience).toBe(2);
			expect(response.favoriteTool).toBe("cypress");
			expect(response.flakinessLevel).toBe(2);
			expect(response.isActive).toBe(true);
		});

		test("Delete engineer", async ({ client }) => {
			const response = await client.engineer.deleteEngineer(engineerId);
		});
	});
