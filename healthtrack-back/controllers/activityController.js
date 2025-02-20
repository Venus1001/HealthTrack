const Activity = require('../models/Activity');

const logActivity = async (req, res) => {
  const { type, details } = req.body;
  try {
    const activity = new Activity({ userId: req.user.id, type, details });
    await activity.save();
    res.status(201).send({ message: 'Activity logged successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { logActivity };



