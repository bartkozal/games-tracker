import mongoose from "mongoose";

export default async onSuccess => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      { useNewUrlParser: true }
    );

    console.log("-> Database connected");

    if (onSuccess) onSuccess(mongoose);
  } catch (err) {
    console.error(err);
  }
};
