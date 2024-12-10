const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');

// @desc Get all recipes in the database
// @route GET /api/recipes
// @access Public
const getAllRecipes = asyncHandler(async(req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes); 
    } catch(error) {
        console.log("Error in fetching recipes: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
});


// @desc Add a recipe to the database
// @Route POST /api/recipes/
const postRecipe = asyncHandler(async(req, res) => {

    console.log(req.body)
    if (!req.body.title || !req.body.short_desc || !req.body.main_img || !req.body.prep_time || !req.body.cook_time || !req.body.servings || !req.body.tags || !req.body.more_info || !req.body.ingredients || !req.body.instructions) {
        return res.status(400).json({success:false, message: "Please fill out all required fields."})
    }

    const newRecipe = new Recipe(recipe);

    // try {
    //     await newRecipe.save();
    //     res.status(201).json({success: true, data: newRecipe});
    // } catch (error) {
    //     console.error("Error in Create recipe:", error.message);
    //     res.status(500).json({ success: false, message: "Server Error"});
    // }
});

module.exports = {
    getAllRecipes,
    postRecipe
}