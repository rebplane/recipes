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
export function postRecipe(newRecipe, setError) {
    axios.post("recipes/", newRecipe, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((res) => {
        if (res.status == 201) {
            window.location = `/recipe/${newRecipe.title}`
        }
    })
    .catch((error) => {
        console.error(`Error: ${error}`)
        setError(true);
        alert('Please fill in all fields.')
    })
}

// Gets the recipe with title <recipe_title>
export function getRecipe(setRecipe, recipe_title) {
    axios.get(`recipes/${recipe_title}`)
    .then((res) => {
        res.data.title = capitalizeWords(res.data.title)
        setRecipe(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}

// Gets the latest three recipes
export function getLatestThreeRecipes(setRecipe) {
    axios.get('recipes/latest3/')
    .then((res) => {
        for (var i=0; i < 3; i++) {
            res.data[i].title = capitalizeWords(res.data[i].title)
        }
        setRecipe(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}

// Gets all the recipes
export function getRecipes(setRecipe) {
    axios.get('recipes/')
    .then((res) => {
        for (var i=0; i < res.data.length; i++) {
            res.data[i].title = capitalizeWords(res.data[i].title)
        }
        setRecipe(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}

// GET the recipe with title <recipe_title> if <recipe_title> is not undefined
export function getEditRecipe(setRecipe, setIngredientValues, setStepValues, setStepPreview, setTags, recipe_title) {
    axios.get(`recipes/${recipe_title}`)
    .then((res) => {
        res.data.title = capitalizeWords(res.data.title);
        setRecipe(res.data);
        setIngredientValues(res.data.ingredients);
        setStepValues(res.data.steps);

        // Set the checkboxes of the tags to true
        var newCboxes = {}; 

        for (var i=0; i < res.data.tags.length; i++) {
            newCboxes[res.data.tags[i]] = true;
        }

        var stepPreview = []
        for (var i=0; i < res.data.steps.length; i++) {
            if (res.data.steps[i]['img'] && res.data.steps[i]['img'] !== null && res.data.steps[i]['img'] !== '') {
                stepPreview.push(res.data.steps[i]['img']);
            } else {
                stepPreview.push(null);
            }
        }

        setTags(newCboxes);
        setRecipe({ ...res.data, tags: newCboxes})
        setStepPreview(stepPreview);
    })
    .catch((error) => {
        console.error(`Error: ${error}`)
    })
}

// Edits the recipe with the new data info
export function editRecipe(newRecipe, setError, recipe_title) {
    axios.put(`recipes/${recipe_title}`, newRecipe, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
    .then((res) => {
        if (res.status == 201) {
            window.location = `/recipe/${newRecipe.title}`
        }
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
        setError(true);
        alert('Please fill in all fields.');
    })
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


// Gets a random recipe
export function getRandomRecipe(setRecipe) {
    axios.get('recipes/random/')
    .then((res) => {
        res.data.title = capitalizeWords(res.data.title);
        res.data.short_desc = res.data.short_desc.split(".")[0]; // Takes only the first sentence of the recipe short description
        setRecipe(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}