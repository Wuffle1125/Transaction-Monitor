import request from "supertest";
import express from "express";
import middleware from "../src/middlewares";
import routes from "../src/routes";
import { config } from "dotenv";
import dbConnect from "../src/config/db";

const app = express();

let server: any;

beforeAll((done) => {
  config();
  done();
});

describe("API Endpoint Tests", () => {
  it("should return a 200 status code for the /api/auth/token/:id endpoint", async () => {
    middleware(app);
    routes(app);
    await dbConnect();
    server = app.listen(0);
    const response = await request(app).get("/api/auth/token/123");
    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
    server.close();
  });

  it("should return a 200 status code for the /api/txs/unconfirmed endpoint", async () => {
    middleware(app);
    routes(app);
    await dbConnect();
    server = app.listen(0);
    const res: any = await request(app).get("/api/auth/token/123");
    const response = await request(app)
      .get("/api/txs/unconfirmed")
      .set({ "x-auth-token": res._body.token });
    expect(response.status).toBe(200);  
    server.close();
  });
});
