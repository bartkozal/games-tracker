import mongoose from "mongoose";
import { rating as schema } from "../config/schema";

export default mongoose.model("Rating", schema);
