import dbConnect from "../src/config/db";

describe("DB connection Tests", () => {
  it("should return a false dbConnect() endpoint", async () => {
    const res = await dbConnect("wrong db url");
    expect(res).toBe(false);
  });
});
