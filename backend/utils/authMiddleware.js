require("dotenv").config();

const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  // Token does not exist
  if (!token) {
    return res.status(403).json({ status: false });
  }

  // Verify that the user has access to the route
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    // User does not have access to the route
    if (err) {
        return res.status(403).json({ status: false })
    } 
    else {
        const user = await User.findById(data.id)
        if (user) {
            return res.status(200).json({ status: true, user: user.username })
        }
        else  {
            return res.status(403).json({ status: false })
        }
    }
  })
}

module.exports.verifyAdmin = (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(403).json( {status: false });
  }

  jwt.verify(token, process.env.TOKEN_KEY, async(err, data) => {
    if (err) {
      return res.status(403).json({ status: false })
    }
    else {
      const user = await User.findById(data.id);
      if (user.role === "admin") {
        return res.status(200).json({ status: true, user: user.username })
      }
      else {
        return res.status(403).json({ status:false })
      }
    }
  })

}