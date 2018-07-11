import mongoose from "mongoose";
import { game as schema } from "../db/schema";
import Platform from "./platform";

schema.statics.createBySearchResults = function(searchResults) {
  searchResults.forEach(async result => {
    const { name, cover } = result;
    const platforms = await Platform.where("slug").in(result.platforms);
    const game = await this.findOne({ name });

    if (!game) {
      this.create({ name, cover, platforms });
    }
  });
};

export default mongoose.model("Game", schema);
