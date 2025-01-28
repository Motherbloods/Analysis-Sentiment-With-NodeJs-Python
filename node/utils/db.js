// db.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectToDatabase = async () => {
  try {
    if (!process.env.URL) {
      throw new Error("URL is not defined in environment variables");
    }

    await mongoose.connect(process.env.URL, {
      maxPoolSize: 10,
      minPoolSize: 5,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
      // Additional recommended options
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      autoIndex: true,
      family: 4, // Use IPv4, skip trying IPv6
    });

    console.log("Successfully connected to MongoDB");

    // Handle connection events
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  } catch (err) {
    console.error("Error closing MongoDB connection:", err);
    process.exit(1);
  }
});

module.exports = { connectToDatabase };
