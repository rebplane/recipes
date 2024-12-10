const express = require('express');
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { getTags, createTag } = require('../controllers/tagController')

// API endpoints, all preceded with /api/tags
router.get('/', getTags);    // {URL}/api/tags/
router.post('/', upload.none(), createTag);  // {URL}/api/tags/

module.exports = router;