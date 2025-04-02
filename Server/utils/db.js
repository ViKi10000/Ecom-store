import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  const DB = process.env.MONGO_URI;
  try {
    await mongoose.connect(DB).then(() => {
      console.log("MongoDB connected successfully");
    });
  } catch (error) {
    console.error("MongoDB connection error:", error);
    setTimeout(connectDb, 5000);
  }
};

export default connectDb;
