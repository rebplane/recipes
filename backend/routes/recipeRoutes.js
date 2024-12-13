const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'frontend/public/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

const upload = multer({ storage: storage })

const { getAllRecipes, postRecipe, getRecipeByTitle, deleteRecipe, getLatestRecipe, editRecipe, getThreeLatestRecipes, getRandomRecipe } = require('../controllers/recipeController')


// API endpoints, all preceded with /api/recipes
router.get('/', getAllRecipes);    // GET {BASE_URL}/api/recipes/
router.get('/latest/', getLatestRecipe);  // GET {BASE_URL}/api/recipes/latest/
router.get('/latest3/', getThreeLatestRecipes); // GET {BASE_URL}/api/recipes/latest3/
router.get('/random/', getRandomRecipe); // GET {BASE_URL}/api/recipes/random/
router.get('/:title', getRecipeByTitle); // GET {BASE_URL}/api/recipes/:title

// Allow POSTing image files to the route
var cpUpload = upload.any()
// var cpUpload = upload.single('img') 

router.post('/', cpUpload, postRecipe);  // POST {BASE_URL}/api/recipes/

router.put('/:title', cpUpload, editRecipe); // PUT {BASE_URL}/api/recipes/:title

router.delete('/:title', deleteRecipe); // DELETE {BASE_URL}/api/recipes/:title

module.exports = router;