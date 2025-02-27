import axios from 'axios';

// Gets the newest created recipe
export function getSubstitutions(substitute, setResults) {
    
    if (substitute) { // Only run if string is not empty
        const api_key = process.env.REACT_APP_API_KEY;
        var api_string = "https://api.spoonacular.com/food/ingredients/substitutes?apiKey=" + api_key + "&ingredientName=" + substitute
        axios.get(api_string)
        .then((res) => {
            console.log(res.data);
            setResults(res.data)
        })
        .catch(error => console.error(`Error: ${error}`))
    }
}

