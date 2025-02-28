const express = require('express');
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { getTags, createTag, getTagsByCategory } = require('../controllers/tagController')

// API endpoints, all preceded with /api/tags
router.get('/', getTags);    // {URL}/api/tags/
router.get('/:cat', getTagsByCategory); // GET {BASE_URL}/api/tags/:tag
router.post('/', upload.none(), createTag);  // {URL}/api/tags/

module.exports = router;