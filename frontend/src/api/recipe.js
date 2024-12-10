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