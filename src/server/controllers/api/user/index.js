import { Router } from "express";
import User from "../../../models/user";

const user = Router();

user.get("/games", async (req, res) => {
  const user = await User.findOne({ email: req.user.email });

  res.json(user.gamesCollection);
});

user.put("/games/:id", (req, res) => {
  res.json({ todo: true });
});

user.put("/games/:id/rating", (req, res) => {
  res.json({ todo: true });
});

export default user;
