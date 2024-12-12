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
    })
    .catch(error => console.error(`Error: ${error}`))
}

// Edits the recipe with the new data info
export function editRecipe(newRecipe, recipe_title) {
    console.log(newRecipe)
    axios.put(`recipes/${recipe_title}`, newRecipe, {
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