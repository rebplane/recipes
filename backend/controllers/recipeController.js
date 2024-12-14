const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');
const { promisify } = require('util')
const fs = require('fs');
const { model } = require('mongoose');

// const production = "https://recipes-wzua.onrender.com/"
// const development = 'http://localhost:5000/'
// const BASE_URL = (process.env.NODE_ENV ? production : development)

const production = "/opt/render/project/src/frontend/public/uploads/"
const  development = 'http://localhost:5000/'
const file_length = (process.env.NODE_ENV ? production.length : development.length)

const BASE_URL = "/uploads/"

const unlinkAsync = promisify(fs.unlink)

// Provides the static URL to the frontend in order to display the static images
function setRecipeImgs(recipe) {
    recipe.img = BASE_URL + recipe.img.slice(file_length);

    for (i=0; i<recipe.steps.length; i++) {
        if (recipe.steps[i].img) {
            recipe.steps[i].img = BASE_URL + recipe.steps[i].img.slice(file_length);
        }
    }
    // console.log(recipe);
    return recipe;
}

// @desc Get all recipes in the database
// @route GET /api/recipes/
// @access Public
const getAllRecipes = asyncHandler(async(req, res) => {
    try {
        const recipes = await Recipe.find();
        for (var i=0; i < recipes.length; i++) {
            recipes[i] = setRecipeImgs(recipes[i])
        }
        res.status(200).json(recipes); 
    } catch(error) {
        console.log("Error in fetching recipes: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
});


// @desc Get the newest recipe added to the database
// @route GET /api/recipes/latest
// @access Public
const getLatestRecipe = asyncHandler(async(req, res) => {
    try {
        var recipe = await Recipe.findOne().sort({ createdAt: -1 }).limit(1);
        console.log(recipe)
        recipe = setRecipeImgs(recipe);
        res.status(200).json(recipe);
    }
    catch(error) {
        console.log("Error in fetching recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})


// @desc Get the three newest recipe added to the database
// @route GET /api/recipes/latest
// @access Public
const getThreeLatestRecipes = asyncHandler(async(req, res) => {
    try {
        var recipes = await Recipe.find().sort({ createdAt: -1 }).limit(3);
        for (var i=0; i < recipes.length; i++) {
            recipes[i] = setRecipeImgs(recipes[i])
        }
        res.status(200).json(recipes);
    }
    catch(error) {
        console.log("Error in fetching recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})


// @desc Get a random recipe 
// @route GET /api/recipes/random/
// @access Public
const getRandomRecipe = asyncHandler(async(req, res) => {

    try {
        var recipe = await Recipe.aggregate().sample(1);
        recipe = recipe[0];
        recipe = setRecipeImgs(recipe);
        res.status(200).json(recipe);
    }
    catch(error) {
        console.log("Error in fetching recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})


// @desc Get recipe by title
// @route GET /api/recipe/{title}
// @access Public
const getRecipeByTitle = asyncHandler(async(req, res) => {
    try {
        var recipe = await Recipe.findOne({ title: req.params.title.toLowerCase()});
        recipe = setRecipeImgs(recipe);
        res.status(200).json(recipe);
    } catch(error) {
        console.log("Error in fetching recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})

// @desc Add a recipe to the database
// @route POST /api/recipes/
// @access Admin
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

    console.log("Saved image file to " + req.files[0].path);

    // Process the images
    for (i=0; i < req.files.length; i++) {
        image = req.files[i]
        if (image.fieldname === 'img') {
            recipe.img = req.files[i].path
            img_found = true
        } else {
            index = Number(req.files[i].fieldname.charAt(6))
            recipe.steps[index]['img'] = req.files[i].path
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

// @desc Edits a pre-existing recipe in the database with title <title>
// @route PUT /api/recipe/{title}
// @access Admin 
const editRecipe = asyncHandler(async(req, res) => { // TODO, also delete old images that we are not re-updating
    const recipe = req.body;

    // Turns the tags into type [String]
    if (recipe.tags) {
        var tags = [];

        for (var key in recipe.tags) {
            if (recipe.tags[key] === 'true') {
                tags.push(key);
            }
        }
        recipe.tags = tags
    }

    // Update the recipe fields if they were passed as form-data keys
    if (recipe.prep_time) {
        recipe.prep_time = Number(recipe.prep_time);
    }
    if (recipe.cook_time) {
        recipe.cook_time = Number(recipe.cook_time);
    }
    if (recipe.servings) {
        recipe.servings = Number(recipe.servings);
    }

    if (recipe.title) {
        recipe.title = recipe.title.toLowerCase();
    }

    if (recipe.img) {
        delete recipe.img;
    }

    for (var i=0; i < recipe.steps.length; i++) {
        if (recipe.steps[i]['img']) {
            recipe.steps[i]['img'] = recipe.steps[i]['img'].replace(BASE_URL, "").replace("/", "\\");
        } 
    }

    // Process the images and delete the old images
    try {
        var oldRecipe = await Recipe.findOne({title: req.params.title.toLowerCase()})
        for (i=0; i < req.files.length; i++) {
            var image = req.files[i]
            if (image.fieldname === 'img') {
                recipe.img = req.files[i].path;
                console.log(recipe.img);
                unlinkAsync(oldRecipe);
            } else {
                index = Number(req.files[i].fieldname.charAt(6));
                
                recipe.steps[index]['img'] = req.files[i].path;

                // Remove an old image
                if (oldRecipe.steps[index] && oldRecipe.steps[index]['img']) {
                    unlinkAsync(oldRecipe.steps[index]['img']);
                }
            }
        }

        // Remove old images if they do not exist anymore
        for (var i=0; i < oldRecipe.steps.length; i++) {
            if (oldRecipe.steps[i] && oldRecipe.steps[i]['img'] && (!recipe.steps[i]['img'] || recipe.steps[i]['img'] === '')) {
                unlinkAsync(oldRecipe.steps[i]['img']);
            }
        }
    }
    catch (error) {
        console.error("Error in Create recipe:", error.message);
        res.status(500).json({ success: false, message: "Server Error"})
    }


    try {
        if (recipe._id) {
            delete recipe._id;
        }
        var newRecipe = await Recipe.findOneAndUpdate({title:  req.params.title.toLowerCase()}, recipe);
        res.status(201).json({success: true});
    } catch (error) {
        console.error("Error in Create recipe:", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})


// @desc Delete recipe by title
// @route DELETE /api/recipe/{title}
// @access Admin
const deleteRecipe = asyncHandler(async(req, res) => {
    try {
        var recipe = await Recipe.findOne({ title: req.params.title.toLowerCase()});

        // Delete all recipe images from database
        
        await unlinkAsync(recipe.img)

        for (i=0; i<recipe.steps.length; i++) {
            if (recipe.steps[i].img) {
                await unlinkAsync(recipe.steps[i].img)
            }
        }

        await Recipe.findByIdAndDelete(recipe._id)

        res.status(200).json({ success: true, message: "Deleted recipe"});
    } catch(error) {
        console.log("Error in fetching recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})


module.exports = {
    getAllRecipes,
    getRecipeByTitle,
    getLatestRecipe,
    getThreeLatestRecipes,
    getRandomRecipe,
    postRecipe, 
    editRecipe,
    deleteRecipe
}