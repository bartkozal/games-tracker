import { model } from "mongoose";
import { rating as schema } from "../db/schema";

export default model("Rating", schema);
