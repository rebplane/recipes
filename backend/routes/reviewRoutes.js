const express = require('express');
const router = express.Router()

const { postReview, getReviewsByTitle } = require('../controllers/reviewController');

// API endpoints, all preceded with /api/reviews/
router.post('/:title', postReview); // POST {URL}/api/reviews/:title
router.get('/:title', getReviewsByTitle);  // GET {URL}/api/reviews/:title

module.exports = router;