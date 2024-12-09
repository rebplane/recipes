const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }


},  {
    timestamps: true // createdAt, updatedAt
});

module.exports = mongoose.model('Tag', tagSchema);