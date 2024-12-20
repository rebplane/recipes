const express = require('express');
const router = express.Router()

const { postReview } = require('../controllers/reviewController')

// API endpoints, all preceded with /api/reviews/
router.post('/', postReview); // POST {URL}/api/reviews/

module.exports = router;