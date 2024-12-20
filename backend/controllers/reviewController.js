const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');
const User = require('../models/userModel');
const Review = require('../models/reviewModel');
const jwt = require("jsonwebtoken");


// @desc Add a review to the database
// @route POST /api/reviews/{title}
// @access Public
const postReview = asyncHandler(async(req, res) => {
    const token = req.cookies.token
    // User is not logged in
    if (!token) {
        return res.status(403).json({ message: "Not logged in." });
    }

    const review = req.body;
    review.rating = Number(review.rating);

    if (!review.rating) {
        return res.status(400).json({ message: "Please give the recipe a rating."})
    }

    // Grab the user that is posting the review
    try {
        userId = jwt.verify(token, process.env.TOKEN_KEY).id;
        let user = await User.findById(userId);
        review.user = user._id;
        let recipe = await Recipe.findOne({ title: req.params.title.toLowerCase()});
        review.recipe = recipe._id;
    }
    catch {
        return res.status(403).json({ message: "Server error." });
    }

    // Check if the user already has a review - if they do, update it
    let userReview = await Review.findOne({recipe: review.recipe, user: review.user })
    if (userReview) {
        var newReview = await Review.findOneAndUpdate({ _id: userReview._id }, review);
        return res.status(201).json({success: true, data: newReview})
    }

    try {
        // Create the review
        const newReview = new Review(review);
        await newReview.save();
        res.status(201).json({success: true, data: newReview});
        
    }
    catch(error) {
        console.log("Error in posting review: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }

})

const getReviewsByTitle = asyncHandler(async(req, res) => {
    console.log("got here")
    try {
        var recipe = await Recipe.findOne({ title: req.params.title.toLowerCase()}); // Get the recipe corresponding to the title
        console.log(recipe)
        var reviews = await Review.find({ recipe: recipe._id});  // Get all reviews corresponding to the recipe's ID

        // Set the usernames in each reviews
        for (var i=0; i < reviews.length; i++) {
            let user = await User.findById(reviews[i].user);
            reviews[i].user = user.username;
        }

        console.log(reviews);

        res.status(200).json(reviews);
    } catch(error) {
        console.log("Error in fetching recipe: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})




module.exports = {
    postReview,
    getReviewsByTitle
}