import mongoose from "mongoose";
import { game as schema } from "../config/db/schema";
import Platform from "./platform";

schema.statics.createFromSearchResults = async function(searchResults) {
  const games = searchResults.map(async result => {
    const { name, cover } = result;
    const platforms = await Platform.where("slug").in(result.platforms);
    let game = await this.findOne({ name });

    if (!game) {
      game = await this.create({ name, cover, platforms });
    }

    return {
      id: game.id,
      name,
      cover,
      platforms: result.platforms
    };
  });

  return await Promise.all(games);
};

export default mongoose.model("Game", schema);
