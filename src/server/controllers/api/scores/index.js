import { Router } from "express";

const scores = Router();

scores.get("/", async (req, res) => {
  // TODO
  res.json([{}]);
});

scores.get("/:id", async (req, res) => {
  // TODO
  res.json({});
});

export default scores;
