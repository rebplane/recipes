const express = require('express');
const router = express.Router()

const { signup, login } = require('../controllers/authController');
const { userVerification } = require('../utils/authMiddleware');

// API endpoints, all preceded with /api/auth/
router.post('/signup/', signup);    // {URL}/api/auth/signup/
router.post('/login/', login);

router.post('/', userVerification);


module.exports = router;