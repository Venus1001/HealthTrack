const User = require('../models/User');
const UserNutrition = require('../models/UserNutrition');
const { userNutritionTemplate } = require('../prompts/prompt');
const generateResponse = require('../clients/openaiClient');

const logNutrition = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log(`User id from the token -> ${userId}`);
        const { date, calories, category, grams } = req.body;
        const userNutritionLog = new UserNutrition({
            userId,
            date,
            calories,
            category,
            grams
        });
        await userNutritionLog.save();
        res.status(201).send({ message: 'Nutrition logged successfully' });
    } catch (e) {
        res.status(500).send(error);
    }
};

const listNutritionLogs = async (req, res) => {
    try {
        console.log(`retrieving fitness for user -> ${req.user.id}`)
        const allNutritionLogs = await UserNutrition.find({ userId: req.user.id }); 
        console.log(`All user nutrition -> ${allNutritionLogs}`)
        res.status(200).json(allNutritionLogs);
    } catch (error) {
        console.error(`Error when listing fitness logs -> ${error}`);
        res.status(500).send(error);
    }
}


const generateNutritionRecommendation = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const userNutritionLogs = await UserNutrition.find({ userId: req.user.id });
        const template = userNutritionTemplate(user, userNutritionLogs);
        const response = await generateResponse(template);
        return res.send({
            aiResponse: response
        });
    } catch (e) {
        console.error(`Error when listing fitness logs -> ${e}`);
        res.status(500).send(e);
    }
}

module.exports = { logNutrition, listNutritionLogs, generateNutritionRecommendation}