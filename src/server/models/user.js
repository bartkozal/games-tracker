import mongoose from "mongoose";
import { user as schema } from "../db/schema";

export default mongoose.model("User", schema);
