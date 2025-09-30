// import mongoose from "mongoose";

// export const connect = async () => {
//   if (mongoose.connections[0].readyState) return;

//   try {
//     await mongoose.connect(process.env.MONGO_URI as string);
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection failed", error);
//     throw new Error("MongoDB connection failed");
//   }
// };


// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI as string;

// export const connect = async () => {
//   if (mongoose.connection.readyState >= 1) {
//     return;
//   }
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log("✅ MongoDB connected successfully");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error);
//     throw error;
//   }
// };


import mongoose from "mongoose";

export const connect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error);
    throw new Error("MongoDB connection failed");
  }
};
