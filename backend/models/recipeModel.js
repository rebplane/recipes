const mongoose = require('mongoose');

// TODO complete schema

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
    }

},  {
    timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('Recipe', recipeSchema);