import mongoose from "mongoose";
import { platform as schema } from "../config/db/schema";

schema.statics.mapSlug = async function(platforms) {
  return await this.where("slug").in(platforms);
};

export default mongoose.model("Platform", schema);
