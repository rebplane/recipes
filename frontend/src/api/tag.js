import axios from 'axios';

export function getTags(setTags) {
    axios.get("tags/")
    .then((res) => {
        setTags(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}


// Gets all tags with category <category>
export function getTagsByCategory(setTags, category) {
    axios.get(`tags/${category}`)
    .then((res) => {
        setTags(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}