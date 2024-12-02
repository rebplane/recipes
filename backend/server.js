const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const port = process.env.PORT  || 5000

const app = express();
app.use(express.json());

connectDB();

var jsonParser = bodyParser.json();

// API routers, located in /routes folder
app.use('/api/recipes', jsonParser, require('./routes/recipeRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`));