import { Router } from "express";
import User from "../../../models/user";

const user = Router();

user.get("/games", async (req, res) => {
  // const user = await User.findById(req.user.id).populate("games.gameId");
  // const games = parseUserGames(user.games.toObject());

  // res.json(games);
  res.json({});
});

user.put("/games/:id", async (req, res) => {
  // const update = await User.update(
  //   {
  //     _id: req.user.id,
  //     "games.gameId": req.params.id
  //   },
  //   {
  //     "games.$.platforms": req.body.platforms,
  //     "games.$.status": req.body.status
  //   }
  // );

  // if (!update.nModified) {
  //   await User.findByIdAndUpdate(req.user.id, {
  //     $push: {
  //       games: {
  //         gameId: req.params.id,
  //         platforms: req.body.platforms,
  //         status: req.body.status
  //       }
  //     }
  //   });
  // }

  res.status(204).end();
});

export default user;
