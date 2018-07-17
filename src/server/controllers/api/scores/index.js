import { Router } from "express";

const scores = Router();

scores.get("/", async (req, res) => {
  // TODO filters
});

scores.get("/:id", async (req, res) => {
  // TODO
});

export default scores;
