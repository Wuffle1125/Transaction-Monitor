import request from "supertest";
import express from "express";
import middleware from "../src/middlewares";
import routes from "../src/routes";
import dbConnect from "../src/config/db";

const app = express();

let server: any;

describe("API Endpoint Tests", () => {
  it("should return a 401 status code for the /api/txs/unconfirmed endpoint", async () => {
    middleware(app);
    routes(app);
    await dbConnect();
    server = app.listen(0);
    const response = await request(app).get("/api/txs/unconfirmed");
    expect(response.status).toBe(401);
    server.close();
  });

  it("should return a 401 status code for the /api/txs/unconfirmed endpoint", async () => {
    middleware(app);
    routes(app);
    await dbConnect();
    server = app.listen(0);
    const response = await request(app)
      .get("/api/txs/unconfirmed")
      .set({ "x-auth-token": "invalid" });
    expect(response.status).toBe(401);
    server.close();
  });
});
