
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { getRecipe } from '../api/recipe'

function RecipePage() {

    const recipe_title = useParams().title

    let [recipe, setRecipe] = useState({tags: [], ingredients: [], steps: []})

    useEffect(() => {
        getRecipe(setRecipe, recipe_title)
    }, [])

    return (
        <div>
            <Header/>

            <div class="flex justify-center ">
                <div class="flex justify-left flex-col mt-5 max-w-screen-xl space-y-5 ml-5 mr-5 md:ml-0 md:mr-0">
                    <div class="md:w-3/4">

                        <h1 class="font-bold text-5xl mb-10">{recipe.title}</h1>

                        <p class="text-md text-xl mb-10">
                        {recipe.short_desc}
                        </p>

                        <div class="gap-y-5">
                            <div class="w-3/4">
                            <img class="mb-5" src={recipe.img} alt={recipe.title}/>
                
                            <div class="flex md:mt-0">
                                <div class="border-0 bg-indigo-50 col-span-1 border-0 border-t-4 border-solid border-indigo-900 w-full mb-10">
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

                            <p class="text-md w-fit col-span-2 text-xl md:my-0 my-5 whitespace-break-spaces">
                            {recipe.more_info}
                            </p>

                        <div class="max-w-md border-0 bg-indigo-50 col-span-2 border-0 border-t-4 border-solid border-indigo-900 my-10">

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
                            {/* <div>
                                <h1 class="font-bold text-3xl md:mt-0 font-poppins">Reviews (0)</h1>

                                <div class="flex text-orange-700">

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <defs>
                                        <linearGradient id="grad">
                                            <stop offset="50%" stop-color="orange"/>
                                            <stop offset="50%" stop-color="white"/>
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#grad)" stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                    </svg>

                                </div>

                                My Rating
                                stars
                                My Review
                                submit

                                4.8 out of 5 stars (with visual)
                                num ratings

                                5 star (bar) (num 5)
                                4 star (bar) (num 4)
                                3 star (bar) (num 3)
                                2 star (bar) (num 2)
                                1 star (bar) (num 1)

                                linebreak

                                start injecting recipes     sort / filter
                            </div> */}


                        </div>
                        
                        </div>
                </div>
            </div>


            <Footer/>
        </div>
  )
}

export default RecipePage