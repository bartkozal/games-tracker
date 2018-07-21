import mongoose from "mongoose";
import { game as schema } from "../config/db/schema";

// TODO improve
schema.statics.createFromSearchResults = async function(searchResults) {
  const games = searchResults.map(async result => {
    const { name, cover, platforms, igdbId } = result;
    let game = await this.findOne({ igdbId });

    if (!game) {
      game = await this.create(result);
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
