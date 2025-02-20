const User = require('../models/User');
const UserFitness = require('../models/UserFitness');
const {userFitnessTemplate  } = require('../prompts/prompt');
const generateResponse = require('../clients/openaiClient');

const logFitness = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log(`User id from the token -> ${userId}`);
        const { date, steps, calories, activity } = req.body;
        const userFitnessLog = new UserFitness({
            userId,
            date,
            steps,
            calories,
            activity
        });
        await userFitnessLog.save();
        res.status(201).send({ message: 'Fitness logged successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};


const listFitnessLogs = async (req, res) => {
    try {
        console.log(`retrieving fitness for user -> ${req.user.id}`)
        const allFitnessLogs = await UserFitness.find({ userId: req.user.id }); 
        console.log(`All user fitness -> ${allFitnessLogs}`)
        res.status(200).json(allFitnessLogs);
    } catch (error) {
        console.error(`Error when listing fitness logs -> ${error}`);
        res.status(500).send(error);
    }
}

const generateFitnessRecommendation = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const userFitnessLogs = await UserFitness.find({ userId: req.user.id });
        const template = userFitnessTemplate(user, userFitnessLogs);
        console.log(`Created the template -> ${template}`);
        const response = await generateResponse(template);
        console.log(`Generated the response -> ${response}`);
        return res.send({
            aiResponse: response
        });
    } catch (e) {
        console.error(`Error when listing fitness logs -> ${e}`);
        res.status(500).send(e);
    }
}

module.exports = { logFitness, listFitnessLogs, generateFitnessRecommendation };