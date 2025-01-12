import React, {useState, useEffect} from 'react';
import { getReviews } from '../api/review';
import { useParams } from "react-router-dom";
import '../index.css'
import FilledStar from './stars/FilledStar';
import EmptyStar from './stars/EmptyStar';

function RecipeComment() {

    let [reviews, setReviews] = useState([]);

    const recipe_title = useParams().title

    useEffect(() => {
        getReviews(setReviews, recipe_title);
    }, [reviews.length])


    return (
        <div>
            {
                reviews.length === 0 ?
                <div>
                    <hr class="my-20"></hr>
                    <p class="text-xl text-gray-500">No reviews yet!</p>
                </div>
                :
                <div></div>
            }

            {reviews.map((element, index) => (
                <div>
                    <hr class="my-20"></hr>
                    <div class="flow-root">
                        <div class="float-left flex">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                        
                        <h2 class="font-bold ml-5 text-xl">{element.user}</h2>
                        </div>

                        <div class="flex float-right">
                        
                        <div class="flex text-orange-700 md:mx-20 mx-10">

                        <FilledStar/>

                        {element.rating >= 2 ?
                            <FilledStar/>
                            :
                            <EmptyStar/>
                        }
                        

                        {element.rating >= 3 ?
                            <FilledStar/>
                            :
                            <EmptyStar/>
                        }
                    
                        {element.rating >= 4 ?
                            <FilledStar/>
                            :
                            <EmptyStar/>
                        }
                    
                        {element.rating >= 5 ?
                            <FilledStar/>
                            :
                            <EmptyStar/>
                        }

                        <h3 class="md:ml-20 text-gray-500 text-xl ml-10">{element.createdAt.slice(0, 10)}</h3>
                    </div>
                    </div>

                    </div>

                    {element.comment
                    ?
                    <p className="text-xl mt-5">{element.comment}</p>
                    :
                    <div></div>
                    }

                </div>
            ))}
        
        
    </div>

)};

export default RecipeComment;