import mongoose from "mongoose";
import { rating as schema } from "../config/db/schema";

export default mongoose.model("Rating", schema);
