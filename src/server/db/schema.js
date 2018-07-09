import { Schema, Types } from "mongoose";

export const user = new Schema({
  email: { type: String, required: true },
  collection: [
    {
      game: { type: Types.ObjectId, ref: "Game", required: true },
      platforms: [{ type: Types.ObjectId, ref: "Platform" }],
      status: {
        enum: ["Wishlist", "Backlog", "Playing", "Completed"]
      }
    }
  ]
});

export const game = new Schema({
  name: { type: String, required: true },
  cover: { type: String, required: true },
  platforms: [{ type: Types.ObjectId, ref: "Platform" }]
});

export const platform = new Schema({
  slug: { type: String, required: true }
});

export const rating = new Schema({
  game: { type: Types.ObjectId, ref: "Game", required: true },
  user: { type: Types.ObjectId, ref: "User", required: true },
  value: { type: Number, required: true }
});
