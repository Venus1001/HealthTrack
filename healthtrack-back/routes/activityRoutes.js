const express = require('express');
const { logActivity } = require('../controllers/activityController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/activity', authMiddleware, logActivity);

module.exports = router;