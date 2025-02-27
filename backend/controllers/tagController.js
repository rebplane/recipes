const asyncHandler = require('express-async-handler');
const Tag = require('../models/tagModel')

// @desc Get all tags in the database
// @route GET /api/tags
// @access Public
const getTags = asyncHandler(async(req, res) => {
    try {
        const tags = await Tag.find().sort({title: 1}); // Sorts alphabetically by title
        res.status(200).json(tags); 
    } catch(error) {
        console.log("Error in fetching tags: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
    
});

// @desc Get all tags with category {cat}
// @route GET /api/tags/{cat}
// @access Public
const getTagsByCategory = asyncHandler(async(req, res) => {
    try {
        const tags = await Tag.find({category: req.params.cat.toLowerCase()}).sort({title: 1}); // Sorts alphabetically by title
        res.status(200).json(tags); 
    } catch(error) {
        console.log("Error in fetching tags: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})

// @desc Create a tag
// @route POST /api/tags
const createTag = asyncHandler(async(req, res) => {
    const tag = req.body;

    console.log(req.body)

    if (!tag.title || !tag.category) {
        return res.status(400).json( {success: false, message: "Please provide all fields."})
    }

    const newTag = new Tag(tag);

    try {
        await newTag.save();
        res.status(201).json( { success: true, data: newTag })
    } catch(error) {
        console.error("Error in Create tag: ", error.message);
        res.status(500).json({ success: false, message: "Server Error"})
    }
});


module.exports = {
    getTags,
    getTagsByCategory,
    createTag
}