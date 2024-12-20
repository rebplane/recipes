import axios from 'axios';

export function postReview(setSuccess, setError, review, title) {
    axios.post(`reviews/${title}`, review, {withCredentials: true})
    .then((res) => {
        if (res.status == 201) {
            setSuccess(true);
            setError(false);
        } else {
            setError(true);
        }
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
        setError(true);
    })
}


export function getReviews(setReviews, recipe_title) {
    axios.get(`reviews/${recipe_title}`)
    .then((res) => {
        console.log(res.data)
        setReviews(res.data);
    })
    .catch(error => console.error(`Error: ${error}`))
}

export function getReviewData(setReviewData, recipe_title) {
    
}