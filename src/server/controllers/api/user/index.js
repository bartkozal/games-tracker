import { Router } from "express";
import User from "../../../models/user";

const user = Router();

user.get("/games", async (req, res) => {
  const user = await User.findById(req.user.id);

  res.json({});
});

user.put("/games/:id", async (req, res) => {
  const user = await User.findById(req.user.id);

  // await user.games.create({
  //   game: req.params.id,
  //   platforms,
  //   status: req.body.status
  // });

  res.json({});
});

user.put("/games/:id/rating", async (req, res) => {
  const user = await User.findById(req.user.id);

  res.json({});
});

export default user;
