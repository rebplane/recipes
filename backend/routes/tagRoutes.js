const express = require('express');
const router = express.Router()

const { getTags, createTag } = require('../controllers/tagController')

// API endpoints, all preceded with /api/tags
router.get('/', getTags);    // {URL}/api/tags
router.post('/', createTag);  // {URL}/api/tags

module.exports = router;