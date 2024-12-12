const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required:  true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},  {
    timestamps: true // createdAt, updatedAt
});

userSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
})

module.exports = mongoose.model("User", userSchema);


// role field?