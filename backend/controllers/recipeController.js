const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');
const { promisify } = require('util')
const fs = require('fs')

const BASE_URL = 'http://localhost:5000/'
const unlinkAsync = promisify(fs.unlink)

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

// @desc Get recipe by title
// @route Get /api/recipe/{title}
// @access Public
const getRecipeByTitle = asyncHandler(async(req, res) => {
    try {
        var recipe = await Recipe.findOne({ title: req.params.title.toLowerCase()});
        recipe.img = BASE_URL + recipe.img.replace("\\", "/");

        for (i=0; i<recipe.steps.length; i++) {
            if (recipe.steps[i].img != "") {
                recipe.steps[i].img = BASE_URL + recipe.steps[i].img.replace("\\", "/");
            }
        }
        res.status(200).json(recipe);
    } catch(error) {
        console.log("Error in fetching recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})

// @desc Add a recipe to the database
// @Route POST /api/recipes/
const postRecipe = asyncHandler(async(req, res) => {

    const recipe = req.body;

    if (!req.body.title || !req.body.short_desc || !req.body.prep_time || !req.body.cook_time || !req.body.servings || !req.body.tags || !req.body.more_info || !req.body.ingredients || !req.body.steps) {
        // Remove the saved files as the POST request failed
        for (i=0; i < req.files.length; i++) {
            await unlinkAsync(req.files[i].path)
        }
        return res.status(400).json({success:false, message: "Please fill out all required fields."})
    }

    // Turns the tags into type [String]
    var tags = []

    for (var key in recipe.tags) {
        if (recipe.tags[key] === 'true') {
            tags.push(key);
        }
    }
    recipe.tags = tags


    // Convert prep_time, cook_time, servings to int
    recipe.prep_time = Number(recipe.prep_time);
    recipe.cook_time = Number(recipe.cook_time);
    recipe.servings = Number(recipe.servings);

    recipe.title = recipe.title.toLowerCase();

    var img_found = false

    // Process the images
    for (i=0; i < req.files.length; i++) {
        image = req.files[i]
        if (image.fieldname === 'img') {
            recipe.img = req.files[i].path
            img_found = true
        } else {
            index = Number(req.files[i].fieldname.charAt(6))
            recipe.steps[i]['img'] = req.files[i].path
        }
    }

    if (img_found === false) {
         // Remove the saved files as the POST request failed
         for (i=0; i < req.files.length; i++) {
            await unlinkAsync(req.files[i].path)
        }
        return res.status(400).json({success:false, message: "Please fill out all required fields."})
    }

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
    getRecipeByTitle,
    postRecipe
}