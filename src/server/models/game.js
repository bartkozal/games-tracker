import mongoose from "mongoose";
import { game as schema } from "../db/schema";

schema.statics.updateFromSearchResults = function(searchResults) {
  searchResults.forEach(({ name, cover, platforms }) => {
    // name: "The Witcher 3: Wild Hunt",
    // cover:
    //   "https://images.igdb.com/igdb/image/upload/t_cover_big/tri1c6vbydeosoqajwt1.jpg",
    // platforms: ["PC", "PS4", "XONE"]

    // Platform.find({ slug: { $in: platforms } }).then(p => console.log(p.id));
    console.log("todo");

    // TODO => map platforms to ids
    // this.findOneAndUpdate({ name }, { name, cover }, { upsert: true });
  });
};

export default mongoose.model("Game", schema);
