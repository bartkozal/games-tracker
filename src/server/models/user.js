import mongoose from "mongoose";
import { user as schema } from "../config/db/schema";

schema.statics.createByEmail = async function(email) {
  let user = await this.findOne({ email });

  if (!user) {
    user = await this.create({ email });
  }

  return user;
};

export default mongoose.model("User", schema);
