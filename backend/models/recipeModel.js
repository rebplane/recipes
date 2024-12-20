const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    short_desc: {
        type: String,
        required: true
    },
    img: {
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
        type: [{amt: String, ing: String}],
        required: true
    },
    steps: {
        type: [{step: String, img: String}],
        required: true
    }


},  {
    timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('Recipe', recipeSchema);