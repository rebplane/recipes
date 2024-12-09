const express = require('express');
const router = express.Router()
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { getAllRecipes, postRecipe, getRecipeByTitle } = require('../controllers/recipeController')

// API endpoints, all preceded with /api/recipes
router.get('/', getAllRecipes);    // {URL}/api/recipes/
router.get('/:title', getRecipeByTitle) // {URL}/api/recipes/:title

// Allow POSTing image files to the route
const cpUpload = upload.fields([{ name: 'img', maxCount: 1}, {name: 'steps', maxCount: 10 }]) 
router.post('/', cpUpload, postRecipe);  // {URL}/api/recipes/

module.exports = router;