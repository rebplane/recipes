const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },
    user: {
        type: String,
        required: true,
    },
    recipe: {
        type: String,
        required: true,
    }


},  {
    timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('Review', reviewSchema);