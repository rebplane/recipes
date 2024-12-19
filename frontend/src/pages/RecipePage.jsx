
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
                            <div class="">
                            <img class="w-3/4 mb-5" src={recipe.img} alt={recipe.title}/>
                
                            <div class="flex md:mt-0">
                                <div class="w-3/4 border-0 bg-indigo-50 col-span-1 border-0 border-t-4 border-solid border-indigo-900 w-full mb-10">
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


                        </div>
                        
                        </div>
                </div>
            </div>


            <Footer/>
        </div>
  )
}

export default RecipePage