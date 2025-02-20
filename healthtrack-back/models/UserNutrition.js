const mongoose = require('mongoose');
const userNutritionSchema = new mongoose.Schema(
        {
            userId: String,
            date: String,
            calories: Number,
            category: String,
            grams: Number,
        }
    )

    module.exports = mongoose.model('UserNutrition', userNutritionSchema);