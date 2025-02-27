const express = require('express');
const router = express.Router()

const { signup, login } = require('../controllers/authController');
const { userVerification, verifyAdmin } = require('../utils/authMiddleware');

// API endpoints, all preceded with /api/auth/
router.post('/signup/', signup);    // {URL}/api/auth/signup/
router.post('/login/', login);

router.post('/', userVerification);
router.post('/admin', verifyAdmin);


module.exports = router;