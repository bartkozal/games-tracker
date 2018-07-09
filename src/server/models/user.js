import { model } from "mongoose";
import { user as schema } from "../db/schema";

export default model("User", schema);
