import React, {useState, useEffect} from 'react';
import '../index.css'
import { getRandomRecipe } from '../api/recipe';


function Featured() {

    let [recipe, setRecipe] = useState({title: "", short_desc: "", img: ""})

    useEffect(() => {
        getRandomRecipe(setRecipe)
    }, [])

    return (
        <div class="mt-20">
            <div class="flex flex-row justify-center">
                <div class="max-w-screen-xl bg-indigo-950 ">
                    <div class="flex md:flex-row text-center items-center w-screen max-w-full">
                        <img class="h-96 w-1/2" src={recipe.img} alt=""/>
                        
                        <div class="w-full p-5">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white font-cambria">{recipe.title}</h5>
                                <p class="font-lg text-gray-300 font-cambria text-lg hidden md:block">{recipe.short_desc}</p>
                            </div>

                            <a href={"recipe/" + recipe.title} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none font-poppins">
                                RECIPE
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Featured;