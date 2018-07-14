import mongoose from "mongoose";
import { platform as schema } from "../config/schema";

export default mongoose.model("Platform", schema);
