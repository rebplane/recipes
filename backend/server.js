const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const recipeRoutes = require('./routes/recipeRoutes');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');

const port = process.env.PORT  || 5000

const BASE_URL = "/uploads/"

const app = express();

app.use(express.json());
app.use(cookieParser());

var corsOptions = {
  origin: ['http://localhost:3000', 'https://www.rebbychayrecipes.com', 'http://www.rebbychayrecipes.com', 'https://recipes-frontend-ykxm.onrender.com', 'http://recipes-frontend-ykxm.onrender.com'],
  credentials: true,
}

app.use(cors(corsOptions));

connectDB();

app.use('/uploads/', express.static(__dirname + '/uploads'));


// API routers, located in /routes folder
app.use('/api/recipes', recipeRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/auth/', authRoutes);
app.use('/api/reviews/', reviewRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));