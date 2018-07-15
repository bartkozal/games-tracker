import { Router } from "express";

const user = Router();

user.get("/games", (req, res) => {
  res.json({ todo: true });
});

user.put("/games/:id", (req, res) => {
  res.json({ todo: true });
});

user.put("/games/:id/rating", (req, res) => {
  res.json({ todo: true });
});

export default user;
