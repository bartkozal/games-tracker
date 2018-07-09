import dotenv from "dotenv";
import connectToDatabase from "./";
import Platform from "../models/platform";

dotenv.config();

connectToDatabase();

["PC", "MAC", "LIN", "PS4", "PS3", "XONE", "X360", "NSW"].forEach(
  async slug => {
    try {
      await Platform.create({ slug });
      console.log(`-> ${slug}`);
    } catch (err) {
      console.error(err);
    }
  }
);
