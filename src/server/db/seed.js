import dotenv from "dotenv";
import connectToDatabase from "./";
import Platform from "../models/platform";

dotenv.config();

const seed = async mongoose => {
  try {
    await Platform.insertMany(
      ["PC", "MAC", "LIN", "PS4", "PS3", "XONE", "X360", "NSW"].map(slug => ({
        slug
      }))
    );

    console.log("-> Platforms seeded");

    mongoose.disconnect();
  } catch (err) {
    console.error(err);
  }
};

connectToDatabase(seed);
