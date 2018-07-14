import dotenv from "dotenv";
import initDatabase from "../initializers/db";
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

initDatabase(seed);
