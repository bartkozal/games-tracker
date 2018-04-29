import request from "supertest";
import app from "./app";

describe("app", () => {
  test("GET /", async () => {
    const { body } = await request(app).get("/");

    expect(body).toEqual({
      version: "v1"
    });
  });
});
