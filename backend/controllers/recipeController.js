const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');

// @desc Get all recipes in the database
// @route GET /api/recipes
// @access Public
const getAllRecipes = asyncHandler(async(req, res) => {
    const recipes = await Recipe.find()
    res.status(200).json(recipes); 
});


// @desc Add a recipe to the database
// @Route GET /api/recipes/add
const postRecipe = asyncHandler(async(req, res) => {
    // Filler to test the API endpoint 
    // TODO process and save data
    if (!req.body.title || !req.body.image) {
        return res.status(400).json({success:false, message: "Please fill out all required fields."})
    }

    const newRecipe = new Recipe(recipe);

    try {
        // await newRecipe.save();
        res.status(201).json({success: true, data: newRecipe});
    } catch (error) {
        console.error("Error in Create recipe:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
});

module.exports = {
    getAllRecipes,
    postRecipe
}