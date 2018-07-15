import { Router } from "express";
import User from "../../../models/user";
import Platform from "../../../models/platform";

const user = Router();

user.get("/games", async (req, res) => {
  const user = await User.findById(req.user.id);
  const games = user.games;

  res.json({});
});

user.put("/games/:id", async (req, res) => {
  const platforms = await Platform.mapSlug(req.body.platforms);
  const user = await User.findById(req.user.id);

  // await user.games.create({
  //   game: req.params.id,
  //   platforms,
  //   status: req.body.status
  // });

  res.json({});
});

user.put("/games/:id/rating", (req, res) => {
  res.json({});
});

export default user;
