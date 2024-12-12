require("dotenv").config();
const jwt = require("jsonwebtoken");

// Creates a token that expires in 1 hour
module.exports.createSecretToken = (id) => {
    return jwt.sign({ id }, process.env.TOKEN_KEY, {
        expiresIn: 3600
    }) 
}