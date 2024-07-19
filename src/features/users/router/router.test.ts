import { describe, it } from "node:test";
import request from "supertest";
import { createApp } from "../../../app";
import { deepEqual } from "node:assert/strict";
import { config } from "dotenv";

// TODO: setup with a test database.
describe("users router", () => {
  config({ path: ".env.local" });

  it("gets users", async () => {
    const { expressApp } = createApp();

    const response = await request(expressApp).get("/api/v1/users");

    deepEqual(response.body, []);
  });
});
