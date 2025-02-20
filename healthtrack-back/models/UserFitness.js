const mongoose = require('mongoose');




const UserFitnessSchema = new mongoose.Schema(
        {
            userId: { type: String, required: true },
            date: { type: String },
            steps: { type: Number },
            calories: { type: Number },
            activity: { type: String },
        }
);


module.exports = mongoose.model('UserFitness', UserFitnessSchema);