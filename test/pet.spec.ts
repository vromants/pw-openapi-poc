import { expect, test } from "../utils/client.fixture";

test.describe("Pet", () => {
	const petId = 10
	const categoryId = 10
	const categoryName = "test category";
	const tagId = 10
	const petName = "Dog";
	const tagName = "Test tag";

	test("Create new pet", async ({ V31_PREFIX_PATH }) => {
		const requestBody =
			{
				id: petId,
				category: {
					id: categoryId,
					name: categoryName
				},
				name: petName,
				photoUrls: [
					"https://www.google.com/photos"
				],
				tags: [
					{
						id: tagId,
						name: tagName
					}
				],
				availableInstances: 7
		}
		const response = await V31_PREFIX_PATH.pet.createPet(requestBody);
		expect(response.id).toBe(petId);
	});

	test("Get pet by id", async ({ V31_PREFIX_PATH }) => {
		const response = await V31_PREFIX_PATH.pet.getById(petId);
		expect(response.id).toBe(petId);
	});
});
