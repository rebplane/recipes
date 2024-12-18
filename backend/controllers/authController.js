const asyncHandler = require('express-async-handler');
const User = require("../models/userModel");
const { createSecretToken } = require("../utils/token");
const bcrypt = require("bcryptjs");


const signup = asyncHandler(async(req, res, next) => {
    try {
        console.log(req.body)
        const { email, password, username } = req.body;

        console.log("test")
        console.log(req.body)

        // Check if user already exists
        let checkUser = await User.findOne({ email });
        if (checkUser) {
            return res.json({ message: "User already exists." })
        }
        checkUser = await User.findOne({ username });
        if (checkUser) {
            return res.json({ message: "That username has been taken." })
        }

        // Create user
        const user = await User.create({ email, password, username });
        const token = createSecretToken(user._id);

        // Send token as cookie
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });

        res.status(201).json({ message: "Sign up successful"});

        next();

    } catch(error) {
        console.log("Error in sign up ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
    
});

const login = asyncHandler(async(req, res, next) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });    
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password." });
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(400).json({ message: "Incorrect email or password." });
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });

        res.status(200).json({ message: "User logged in successfully", success: true });
    } 
    catch(error) {
        console.log("Error in login ", error.message);
        res.status(500).json({ success: false, message: "Server Error"});
    }
})

module.exports = {
    signup,
    login
}