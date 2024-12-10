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

    const recipe = req.body

    console.log(req.body)

    if (!req.body.title || !req.body.short_desc || !req.body.img || !req.body.prep_time || !req.body.cook_time || !req.body.servings || !req.body.tags || !req.body.more_info || !req.body.ingredients || !req.body.steps) {
        return res.status(400).json({success:false, message: "Please fill out all required fields."})
    }

    // Turns the tags into type [String]
    var tags = []

    for (var key in recipe.tags) {
        if (recipe.tags[key] === true) {
            tags.push(key);
        }
    }
    recipe.tags = tags

    // Convert prep_time, cook_time, servings to int
    recipe.prep_time = Number(recipe.prep_time)
    recipe.cook_time = Number(recipe.cook_time)
    recipe.servings = Number(recipe.servings)

    const newRecipe = new Recipe(recipe);

    try {
        await newRecipe.save();
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