
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRecipe } from '../api/recipe'
import RecipeForm from '../components/ReviewForm';
import RecipeDisplay from '../components/ReviewDisplay';
import RecipeComment from '../components/ReviewComment';
import { getReviewData } from '../api/review';
import StarDisplay from '../components/stars/StarDisplay';
import { userCheck } from '../api/auth';

function RecipePage() {

    const recipe_title = useParams().title

    let [recipe, setRecipe] = useState({tags: [], ingredients: [], steps: []})
    let [reviewData, setReviewData] = useState({rating_avg: 0, num_reviews: 0, num_comments: 0})

    const [user, setUser] = useState("");

    useEffect(() => {
        getRecipe(setRecipe, recipe_title);
        getReviewData(setReviewData, recipe_title);

        const verifyCookie = async() => {
            let userData = userCheck(setUser);
            return userData;
        };
        verifyCookie();

    }, [recipe_title])

    return (
        <div>
            <Header/>

            <div class="flex justify-center dark:bg-gray-950 dark:text-white">
                <div class="flex md:justify-left flex-col mt-5 md:max-w-screen-xl max-w-md space-y-5 ml-5 mr-5 md:ml-0 md:mr-0">
                    <div class="md:w-3/4">

                        <h1 class="font-bold text-5xl mb-10">{recipe.title}</h1>

                        <div class="flex">
                            <StarDisplay avg={reviewData.rating_avg}/>
                            <p class="text-black text-lg ml-5 mb-1 font-poppins dark:text-gray-300"> <b> {reviewData.rating_avg.toFixed(2)} </b> <b class="text-gray-500">({reviewData.num_reviews} REVIEWS) </b> | <b>{reviewData.num_comments} COMMENTS </b> </p>
                        </div>

                        <div class="gap-y-5 mt-10">
                            <div class="">
                            <img class="mb-5 w-full" src={recipe.img} alt={recipe.title}/>
                
                            <div class="flex md:mt-0">
                                <div class="border-0 bg-indigo-50 col-span-1 border-0 border-t-4 border-solid border-indigo-900 mb-10 w-full dark:bg-indigo-950">
                                    <div class="px-6 py-4">
                                        <div class="md:grid md:grid-cols-2">
                                        <p class="text-base text-xl">
                                        <b>Prep Time: </b> {recipe.prep_time} mins
                                        </p>
                                        <p class="text-base text-xl">
                                        <b>Cooking Time: </b> {recipe.cook_time} mins
                                        </p>
                                        </div>
                                    </div>

                                    <div class="px-6 py-4">
                                        <p class="text-base text-xl">
                                        <b>Total Time: </b> {recipe.prep_time + recipe.cook_time} mins
                                        </p>
                                    </div>

                                    <hr class="border-0 border-t-2 border-solid border-indigo-900 mx-5"></hr>

                                    <div class="px-6 pt-4 pb-2 grid grid-cols-3 space-y-3">
                                        <p class="font-bold text-xl">Tags:</p>
                                        <p></p>
                                        <p></p>
                                        {
                                            recipe.tags.map(tag => <p><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-xl mr-2 mb-2">{String(tag).charAt(0).toUpperCase() + String(tag.slice(1))}</span></p>)
                                        }
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                            <p class="text-md text-xl my-10">
                            {recipe.short_desc}
                            </p>

                            <p class="text-md w-fit col-span-2 text-xl md:my-0 my-5 whitespace-break-spaces">
                            {recipe.more_info}
                            </p>

                        <div class="max-w-md border-0 bg-indigo-50 col-span-2 border-0 border-t-4 border-solid border-indigo-900 my-10 dark:bg-indigo-950">

                            <div class="px-3 py-4 col-span-1 space-y-3">
                                <div class="font-bold text-3xl mb-2 font-poppins">Ingredients</div>
                                    <div class="flex flex-col space-y-3">
                                        {
                                            recipe.ingredients.map(i =>
                                                <div class="flex items-center">
                                                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                                    <label for="link-checkbox" class="ms-2 text-sm font-medium text-xl">{i.amt} {i.ing}</label>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <h1 class="font-bold text-3xl md:mt-0 mt-5 mb-5 font-poppins">Instructions</h1>
                            
                            {recipe.steps.map((element, index) =>(
                                <p class="text-md w-fit col-span-2 text-xl md:mt-0 my-5">
                                <b>{index + 1}) </b> {element.step} 
                                {
                                    element.img ?
                                    <img class="max-w-xl mt-3" src={element.img || ""} alt="Burger"/>
                                    : null
                                }
                                    
                                </p>

                            
                            ))}

                            <div className="mt-10">
                                <div class="max-w-screen-xl w-screen relative flex items-center my-20">
                                    <div class="mr-5 flex-grow border-t border-3 border-indigo-950"></div> <img src="/images/rebbychay.png" class="h-56" alt="RebbyChayLogo" /> <div class="ml-5 flex-grow border-t border-3 border-indigo-950"></div>
                                </div>
                            </div>
                            
                            <RecipeDisplay reviewData={reviewData}/>
                            
                            <hr class="my-20"></hr>

                            {user !== "" ?
                            <RecipeForm/>
                            :
                            <p class="text-xl">Want to leave a review? <a href="/signup" class="text-blue-600 hover:underline">Create an account</a> or <a href="/login" class="text-blue-600 hover:underline">login</a>.</p>
                            }
                        
                            <RecipeComment/>


                        </div>
                        
                        </div>
                </div>
            </div>


            <Footer/>
        </div>
  )
}

export default RecipePage