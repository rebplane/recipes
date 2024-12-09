import axios from 'axios';

export function getTags(setTags) {
    axios.get("tags/")
    .then((res) => {
        setTags(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}