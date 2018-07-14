import mongoose from "mongoose";
import { platform as schema } from "../config/db/schema";

export default mongoose.model("Platform", schema);
