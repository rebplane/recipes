const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const cors = require('cors');

const recipeRoutes = require('./routes/recipeRoutes');
const tagRoutes = require('./routes/tagRoutes')


const port = process.env.PORT  || 5000

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// API routers, located in /routes folder
app.use('/api/recipes', recipeRoutes)
app.use('/api/tags', tagRoutes)

app.listen(port, () => console.log(`Server started on port ${port}`));