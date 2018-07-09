import mongoose from "mongoose";
import { rating as schema } from "../db/schema";

export default mongoose.model("Rating", schema);
