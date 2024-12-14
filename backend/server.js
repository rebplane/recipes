const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const recipeRoutes = require('./routes/recipeRoutes');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoutes');

const port = process.env.PORT  || 5000

const BASE_URL = "/uploads/"

const app = express();

app.use(express.json());
app.use(express.static('uploads'));
app.use(cookieParser());

var whitelist = ['http://localhost:3000', 'https://www.rebbychayrecipes.com', 'http://www.rebbychayrecipes.com', 'https://recipes-frontend-ykxm.onrender.com', 'http://recipes-frontend-ykxm.onrender.com']

var corsOptions = {
  credentials: true,
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// app.use(cors())
app.use(cors(corsOptions));

connectDB();


// API routers, located in /routes folder
app.use('/api/recipes', recipeRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/auth/', authRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));