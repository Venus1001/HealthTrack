const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, getUserProfile);
router.post('/', authMiddleware, updateUserProfile);


module.exports = router;