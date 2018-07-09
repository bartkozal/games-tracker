import mongoose from "mongoose";
import { platform as schema } from "../db/schema";

export default mongoose.model("Platform", schema);
