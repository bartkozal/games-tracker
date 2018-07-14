import mongoose from "mongoose";
import { user as schema } from "../config/db/schema";

schema.statics.createByEmail = async function(email) {
  const user = await this.findOne({ email });

  if (!user) {
    await this.create({ email });
  }
};

export default mongoose.model("User", schema);
