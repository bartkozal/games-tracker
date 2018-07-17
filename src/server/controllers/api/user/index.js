import { Router } from "express";
import User from "../../../models/user";
import Rating from "../../../models/rating";
import { parseUserGames } from "./utils";

const user = Router();

user.get("/games", async (req, res) => {
  // TODO filters
  const user = await User.findById(req.user.id).populate("games.game");
  const games = parseUserGames(user.games.toObject());

  res.json(games);
});

user.put("/games/:id", async (req, res) => {
  const update = await User.update(
    {
      _id: req.user.id,
      "games.game": req.params.id
    },
    {
      "games.$.platforms": req.body.platforms,
      "games.$.status": req.body.status
    }
  );

  if (!update.nModified) {
    await User.findByIdAndUpdate(req.user.id, {
      $push: {
        games: {
          game: req.params.id,
          platforms: req.body.platforms,
          status: req.body.status
        }
      }
    });
  }

  res.status(204).end();
});

user.put("/games/:id/rating", async (req, res) => {
  await Rating.update(
    {
      user: req.user.id,
      game: req.params.id
    },
    { value: req.body.rating },
    { upsert: true }
  );

  res.status(204).end();
});

user.get("/ratings", async (req, res) => {
  // TODO
  // TODO filters
});

export default user;
