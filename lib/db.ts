
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!; // Make sure to set this in `.env.local`

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("🔥 MongoDB Connected!");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!", error);
  }
};
