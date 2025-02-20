const User = require('../models/User');
const { ObjectId } = require('mongoose');

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUserProfile = async (req, res) => {
  try {
    console.log(`Received request -> ${JSON.stringify(req.body)}`);
    const { firstName, lastName, height, weight, age, fitnessGoal } = req.body;

    const user = await User.findOneAndUpdate(
      { _id: req.user.id}, // Filter criteria
      { $set: { firstName, lastName, height, weight, age, fitnessGoal }}, // Update data
      { new: true }
    );
  
    res.send(user).json();
  } catch (error) {
    console.error(`Error occurred -> ${error}`)
    res.status(500).send(error);
  }
};

module.exports = { getUserProfile, updateUserProfile };