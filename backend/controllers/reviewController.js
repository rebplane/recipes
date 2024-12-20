const asyncHandler = require('express-async-handler');
const Recipe = require('../models/recipeModel');
const User = require('../models/userModel');
const Review = require('../models/reviewModel');
const jwt = require("jsonwebtoken");


// @desc Add a review to the database
// @route POST /api/reviews/
// @access Public
const postReview = asyncHandler(async(req, res) => {
    const token = req.cookies.token
    // User is not logged in
    if (!token) {
        return res.status(403).json({ message: "Not logged in." });
    }

    const review = req.body;
    review.rating = Number(review.rating);

    if (!req.body.rating || !req.body.recipe) {
        return res.status(400).json({ message: "Please fill in all required fields."})
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.status(403).json({ message: "Not logged in." })
        } 
        else {
            review.user = await User.findById(data.id)._id
        }
    })

    try {
        review.recipe = await Recipe.findOne({ title: review.recipe.toLowerCase() })._id
        const newReview = new Review(review);
        await newReview.save();
        res.status(201).json({success: true, data: newReview});
        
    }
    catch(error) {
        console.log("Error in posting review: ", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }

})


module.exports = {
    postReview,
}