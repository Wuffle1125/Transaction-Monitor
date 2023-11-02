import mongoose from "mongoose";

export default async (url = process.env.DB_URL!) => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(url, {});
    console.info(`MongoDB connected.`);
    return true;
  } catch (error) {
    console.error("Error connecting to database: ", error);
    return false;
  }
};
