const { default: mongoose } = require("mongoose");
const { connectDB } = require("../../db/dbconnection");
const { fakeNameWithId } = require("../mock_data/userNames");
const { generateFakeUser, generateFakeUserFitness, generateFakeUserNutrition } = require("../mock_data/users");



const conn = connectDB();
initializeUserCollection();
initializeUserFitnessCollection();
intializeUserNutritionCollection();


function initializeUserCollection() {
    const userSchema = new mongoose.Schema(
        { 
            userId: String, 
            height: Number, 
            weight: Number,
            age: Number,
            fitnessGoal: String
        }
    )

    // Defining User model 
    const User = mongoose.model('User', userSchema);

    // Create collection of Model 
    User.createCollection().then(function () {
        console.log('User collection is created!');
    });
    const fakeUsers = fakeNameWithId.map(item => generateFakeUser(item[0], item[1]));
    User.insertMany(fakeUsers);
}

function initializeUserFitnessCollection() {
    const userFitnessSchema = new mongoose.Schema(
        {
            userId: String,
            date: String,
            steps: Number,
            calories: Number,
            activity: String,
        }
    )

    // Defining User model 
    const UserFitness = mongoose.model('UserFitness', userFitnessSchema);

    // Create collection of Model 
    UserFitness.createCollection().then(function () {
        console.log('User fitness collection is created!');
    });
    const fakeUserFitness = fakeNameWithId.map(item => generateFakeUserFitness(item[0]));
    UserFitness.insertMany(...fakeUserFitness);
}

function intializeUserNutritionCollection() {
    const userNutritionSchema = new mongoose.Schema(
        {
            userId: String,
            date: String,
            calories: Number,
            category: String,
            grams: Number,
        }
    )

    // Defining User model 
    const UserNutrition = mongoose.model('UserNutrition', userNutritionSchema);

    // Create collection of Model 
    UserNutrition.createCollection().then(function () {
        console.log('User nutrition collection is created!');
    });
    const fakeUserNutrition = fakeNameWithId.map(item => generateFakeUserNutrition(item[0]));
    UserNutrition.insertMany(...fakeUserNutrition);
}
