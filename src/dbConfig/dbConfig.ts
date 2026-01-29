import mongoose from "mongoose";

let isConnected = false;

export async function connect() {
  if (isConnected) return;

  try {
    const MONGO_URI =
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_URI // MongoDB Atlas (Vercel)
        : "mongodb://127.0.0.1:27017/jobportalnextjs"; // Local MongoDB

    if (!MONGO_URI) {
      throw new Error("MongoDB URI is missing");
    }

    await mongoose.connect(MONGO_URI);

    isConnected = true;
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}
