import axios from 'axios';

export function postRecipe(newRecipe) {
    axios.post("recipes/", newRecipe)
    .then((res) => {
        if (res.status == 200) {
            console.log(newRecipe)
        }
    })
    .catch(error => console.error(`Error: ${error}`))
}

export function getRecipe(setRecipe, recipe_title) {
    axios.get(`recipes/${recipe_title}`)
    .then((res) => {
        console.log(res.data)
        // Capitalize the first letter of every word in the recipe title
        var recipe_title = res.data.title.split(' ');
        for (var i=0; i < recipe_title.length; i++) {
            recipe_title[i] = recipe_title[i].charAt(0).toUpperCase() + recipe_title[i].substring(1);
        }
        res.data.title = recipe_title.join(' ');
        // Set the React recipe hook
        setRecipe(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}