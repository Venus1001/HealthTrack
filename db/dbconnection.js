const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set("strictQuery", true);
exports.connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGO_URI);
    if (conn) {
        console.log("Database connected successfully");
        return conn;
    }
    else{
        console.log("Database connection failed!");
    }
  } catch (error) {
    console.log("Database connection failed! ", error);
  }
};