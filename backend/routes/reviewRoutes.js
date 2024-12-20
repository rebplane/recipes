const express = require('express');
const router = express.Router()

const { postReview, getReviewsByTitle, getReviewData } = require('../controllers/reviewController');

// API endpoints, all preceded with /api/reviews/
router.post('/:title', postReview); // POST {URL}/api/reviews/:title
router.get('/:title', getReviewsByTitle);  // GET {URL}/api/reviews/:title
router.get('/data/:title', getReviewData);  // GET {URL}/api/reviews/data/:title

module.exports = router;