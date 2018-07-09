import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      { useNewUrlParser: true }
    );
    console.log("-> Database connected");
  } catch (err) {
    console.error(err);
  }
};
