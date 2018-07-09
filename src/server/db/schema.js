import { Schema } from "mongoose";

export const user = new Schema({
  email: { type: String, required: true, unique: true },
  gamesCollection: [
    {
      game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
      platforms: [{ type: Schema.Types.ObjectId, ref: "Platform" }],
      status: {
        type: String,
        enum: ["Wishlist", "Backlog", "Playing", "Completed"]
      }
    }
  ]
});

export const game = new Schema({
  name: { type: String, required: true },
  cover: { type: String, required: true },
  platforms: [{ type: Schema.Types.ObjectId, ref: "Platform" }]
});

export const platform = new Schema({
  slug: { type: String, required: true, unique: true }
});

export const rating = new Schema({
  game: { type: Schema.Types.ObjectId, ref: "Game", required: true },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  value: { type: Number, required: true }
});
