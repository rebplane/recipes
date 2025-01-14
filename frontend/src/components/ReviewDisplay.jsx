import React from 'react';
import '../index.css'
import FilledStar from './stars/FilledStar';
import EmptyStar from './stars/EmptyStar';
import HalfStar from './stars/HalfStar';
import StarDisplay from './stars/StarDisplay';

function RecipeDisplay({ reviewData }) {

    let avg = reviewData.rating_avg

    let starDisplay = (starNum) => { 
        if (avg < starNum + 0.5) { 
            return <EmptyStar/>
        }
        else if (avg < starNum + 1 && avg >= starNum + 0.5) {   
            return <HalfStar/>
        }
        else {
            return <FilledStar/>
        }
    }

    // start w star 0

    return (

        <div class="dark:text-white">
    
        <h1 class="font-bold text-3xl md:mt-0 font-poppins mb-7">Reviews ({reviewData.num_reviews})</h1>

            <StarDisplay avg={reviewData.rating_avg}/>


            <h2 class="text-xl mt-5 text-black dark:text-gray-300">{reviewData.rating_avg.toFixed(2)} out of 5 stars</h2>
        
    </div>
)};

export default RecipeDisplay;