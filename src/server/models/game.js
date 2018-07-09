import mongoose from "mongoose";
import { game as schema } from "../db/schema";

export default mongoose.model("Game", schema);
