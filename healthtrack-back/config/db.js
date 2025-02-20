const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://venushu123:venushu123@healthtrack.3aoag.mongodb.net/?retryWrites=true&w=majority&appName=HealthTrack"
    );
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;