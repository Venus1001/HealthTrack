const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { logNutrition, listNutritionLogs, generateNutritionRecommendation } = require('../controllers/userNutritionController')

const router = express.Router();

router.post('/nutrition', authMiddleware, logNutrition);
router.get('/nutrition', authMiddleware, listNutritionLogs);
router.get('/nutrition/recommendation', authMiddleware, generateNutritionRecommendation);

module.exports = router;