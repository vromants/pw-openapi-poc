import { expect, test } from "../utils/client.fixture";

test.describe("Store", () => {
	const storeId = Date.now();

	test("Create new store", async ({ v2Client }) => {
		const requestBody = {
			id: storeId,
			petId: 0,
			quantity: 1,
			shipDate: "2028-03-17T16:15:33.314Z",
			complete: true,
		};
		const response = await v2Client.store.createStore(requestBody);
		expect(response.id).toBe(storeId);
	});

	test("Get store by id", async ({ v2Client }) => {
		const response = await v2Client.store.getById(storeId);
		expect(response.id).toBe(storeId);
	});
});
