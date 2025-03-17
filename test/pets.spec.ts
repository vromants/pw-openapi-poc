import { expect, test } from "../utils/client.fixture";

test.describe("Pets", () => {
    test("Pet object that needs to be added to the store", async ({ v2Client }) => {
        const body = {
            id: 1000,
            category: {
                id: 1001,
                name: "test",
            },
            name: "PW test pet",
            photoUrls: ["string"],
            tags: [{
                id: 23123123,
                name: "test tag",
            }]
        }
        const request = await v2Client.pet.createPet(body);
        console.log(request);
        expect(request.parameters.body.body.name).toBe("PW test pet");
    });
});
