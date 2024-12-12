import axios from 'axios';

// Capitalizes the first letter of every word in the string
function capitalizeWords(str) {
    var strSplit = str.split(' ');
    for (var i=0; i < strSplit.length; i++) {
        strSplit[i] = strSplit[i].charAt(0).toUpperCase() + strSplit[i].substring(1);
    }
    return strSplit.join(' ');
}

// Sends a POST request to create a new recipe in the database
export function postRecipe(newRecipe) {
    console.log(newRecipe)
    axios.post("recipes/", newRecipe, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((res) => {
        if (res.status == 200) {
            console.log(newRecipe)
        }
    })
    .catch(error => console.error(`Error: ${error}`))
}

// Gets the recipe with title <recipe_title>
export function getRecipe(setRecipe, recipe_title) {
    axios.get(`recipes/${recipe_title}`)
    .then((res) => {
        res.data.title = capitalizeWords(res.data.title)
        setRecipe(res.data);
        console.log(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}


// GET the recipe with title <recipe_title> if <recipe_title> is not undefined
export function getEditRecipe(setRecipe, setIngredientValues, setStepValues, recipe_title) {
    axios.get(`recipes/${recipe_title}`)
    .then((res) => {
        res.data.title = capitalizeWords(res.data.title);
        console.log(res.data.ingredients);
        setRecipe(res.data);
        setIngredientValues(res.data.ingredients);
        setStepValues(res.data.steps);
    })
    .catch(error => console.error(`Error: ${error}`))
}

// Edits the recipe with the new data info
export function editRecipe(newRecipe) {
    axios.post("recipes/edit/:title", newRecipe, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((res) => {
        if (res.status == 200) {
            console.log(newRecipe)
        }
    })
    .catch(error => console.error(`Error: ${error}`))
}


// Gets the newest created recipe
export function getLatestRecipe(setRecipe) {
    axios.get('recipes/latest/')
    .then((res) => {
        res.data.title = capitalizeWords(res.data.title)
        setRecipe(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}