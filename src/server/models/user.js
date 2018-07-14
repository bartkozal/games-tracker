import mongoose from "mongoose";
import { user as schema } from "../config/schema";

export default mongoose.model("User", schema);
