import { Schema } from "mongoose";

export const user = new Schema({
  email: { type: String, required: true, unique: true },
  games: [
    {
      gameId: { type: Schema.Types.ObjectId, ref: "Game", required: true },
      platforms: [String],
      status: {
        type: String,
        enum: ["wishlist", "backlog", "playing", "completed"]
      }
    }
  ]
});

export const game = new Schema({
  name: { type: String, unique: true, required: true },
  cover: { type: String, required: true },
  platforms: [{ type: String, required: true }]
});

export const rating = new Schema({
  gameId: { type: Schema.Types.ObjectId, ref: "Game", required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  value: { type: Number }
});
