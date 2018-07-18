import { Router } from "express";
import User from "../../../models/user";
import Rating from "../../../models/rating";
import { parseUserGames, parseUserRatings } from "./utils";

const user = Router();

user.get("/games", async (req, res) => {
  const user = await User.findById(req.user.id).populate("games.gameId");
  const games = parseUserGames(user.games.toObject());

  res.json(games);
});

user.put("/games/:id", async (req, res) => {
  const update = await User.update(
    {
      _id: req.user.id,
      "games.gameId": req.params.id
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
          gameId: req.params.id,
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
      userId: req.user.id,
      gameId: req.params.id
    },
    { value: req.body.rating },
    { upsert: true }
  );

  res.status(204).end();
});

user.get("/ratings", async (req, res) => {
  const idFilter = req.query.id
    ? { gameId: { $in: req.query.id.split(",") } }
    : {};
  const ratings = await Rating.find({
    userId: req.user.id,
    ...idFilter
  });
  const gameRatings = parseUserRatings(ratings);

  res.json(gameRatings);
});

export default user;
