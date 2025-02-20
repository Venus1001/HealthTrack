const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {logFitness, listFitnessLogs, generateFitnessRecommendation } = require('../controllers/userFitnessController')

const router = express.Router();


router.post('/fitness', authMiddleware, logFitness);
router.get('/fitness', authMiddleware, listFitnessLogs);

router.get('/fitness/recommendation', authMiddleware, generateFitnessRecommendation)

module.exports = router;