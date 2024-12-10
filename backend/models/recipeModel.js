const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    short_desc: {
        type: String,
        required: true
    },
    main_img: {
        type: String,
        required: true
    },
    prep_time: {
        type: Number,
        required: true
    },
    cook_time: {
        type: Number,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    tags: {
        type: [String],
        required: false
    },
    more_info: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String, String],
        required: true
    },
    instructions: {
        type: [String, String],
        required: true
    }


},  {
    timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('Recipe', recipeSchema);