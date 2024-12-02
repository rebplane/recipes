const express = require('express');
const router = express.Router()

const { getAllRecipes, postRecipe } = require('../controllers/recipeController')

// API endpoints, all preceded with /api/recipes
router.post('/', getAllRecipes);    // {URL}/api/recipes/
router.post('/addRecipe', postRecipe);  // {URL}/api/recipes/addRecipe

module.exports = router;