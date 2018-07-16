import mongoose from "mongoose";
import { game as schema } from "../config/db/schema";

schema.statics.createFromSearchResults = async function(searchResults) {
  const games = searchResults.map(async result => {
    const { name, cover, platforms } = result;
    let game = await this.findOne({ name });

    if (!game) {
      game = await this.create({ name, cover, platforms });
    }

    return {
      id: game.id,
      name,
      cover,
      platforms
    };
  });

  return await Promise.all(games);
};

export default mongoose.model("Game", schema);
