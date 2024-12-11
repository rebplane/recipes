
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

            <div class="flex justify-center">
                <div class="flex-col mt-5 max-w-screen-xl space-y-5 ml-5 mr-5 md:ml-0 md:mr-0">

                        <h1 class="font-bold text-2xl">{recipe.title}</h1>

                        <p class="text-md">
                        {recipe.short_desc}
                        </p>

                        <div class="grid grid-cols-2 gap-5">
                            <img class="col-span-1" src={recipe.img} alt="Burger"/>

                            <div class="flex">
                                <div class="max-w-xl border-0 bg-indigo-50 col-span-1 border-0 border-t-4 border-solid border-indigo-900 w-fit">
                                    <div class="px-6 py-4">
                                        <p class="text-base">
                                        <b>Prep Time: </b> {recipe.prep_time} mins
                                        </p>
                                    </div>

                                    <div class="px-6 py-4">
                                        <p class="text-base">
                                        <b>Cooking Time: </b> {recipe.cook_time} mins
                                        </p>
                                    </div>

                                    <div class="px-6 py-4">
                                        <p class="text-base">
                                        <b>Total Time: </b> {recipe.prep_time + recipe.cook_time} mins
                                        </p>
                                    </div>

                                    <div class="px-6 pt-4 pb-2 flex-col space-y-3">
                                        {
                                            recipe.tags.map(tag => <p><span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{String(tag).charAt(0).toUpperCase() + String(tag.slice(1))}</span></p>)
                                        }
                                    </div>
                                </div>
                            </div>

                            <p class="text-md w-fit col-span-2">
                            {recipe.more_info}
                            </p>

                        <div class="max-w-md border-0 bg-indigo-50 col-span-2 border-0 border-t-4 border-solid border-indigo-900">

                            <div class="px-3 py-4 col-span-1 space-y-3">
                                <div class="font-bold text-xl mb-2">Ingredients</div>
                                    <div class="flex flex-col space-y-3">
                                        {
                                            recipe.ingredients.map(i =>
                                                <div class="flex items-center">
                                                    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                                    <label for="link-checkbox" class="ms-2 text-sm font-medium">{i.amt} {i.ing}</label>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>

                            <h1 class="font-bold text-2xl">Instructions</h1>
                            
                            {recipe.steps.map((element, index) =>(
                                <p class="text-md w-fit col-span-2">
                                <b>{index + 1}) </b> {element.step} 
                                    <img class="max-w-xl mt-3" src={element.img} alt="Burger"/>
                                </p>

                                // TODO: Get instruction image
                            ))}


                        </div>
                        

                </div>
            </div>


            <Footer/>
        </div>
  )
}

export default RecipePage