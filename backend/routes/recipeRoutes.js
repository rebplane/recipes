const express = require('express');
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

const upload = multer({ storage: storage })

const { getAllRecipes, postRecipe, getRecipeByTitle } = require('../controllers/recipeController')

// API endpoints, all preceded with /api/recipes
router.get('/', getAllRecipes);    // {URL}/api/recipes/
router.get('/:title', getRecipeByTitle) // {URL}/api/recipes/:title

// Allow POSTing image files to the route
var cpUpload = upload.any()
// var cpUpload = upload.single('img') 

router.post('/', cpUpload, postRecipe);  // {URL}/api/recipes/

module.exports = router;