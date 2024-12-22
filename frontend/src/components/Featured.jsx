import React, {useState, useEffect} from 'react';
import '../index.css'
import { getRandomRecipe } from '../api/recipe';


function Featured() {

    let [recipe, setRecipe] = useState({title: "", short_desc: "", img: ""})

    useEffect(() => {
        getRandomRecipe(setRecipe)
    }, [])

    return (
        <div class="flex justify-center">
            
            <div>

                <div class="max-w-screen-xl w-screen relative flex items-center my-10 md:mx-5 max-md:my-5">
                    <div class="mr-5 flex-grow border-t border-8 border-indigo-950 max-md:hidden"></div> <h1 class="font-bold text-2xl font-poppins max-md:hidden">FEATURED</h1> <div class="max-md:hidden ml-5 flex-grow border-t border-8 border-indigo-950"></div>
                </div>
                
                <div style={{'--image-url' : `url(${recipe.img})`}}
                     class="max-w-screen-xl md:bg-indigo-950 md:py-0 py-10 mx-5 max-md:bg-[image:var(--image-url)] bg-fixed bg-cover bg-no-repeat bg-hero bg-center">
                    
                    <div class="md:flex md:flex-row text-center items-center max-w-full">
                        <img class="w-1/2 min-h-64 md:min-h-96 max-md:hidden" src={recipe.img} alt=""/>
                        
                        <div class="p-5">
                            
                            <div class="md:text-left md:ml-9">
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-3xl font-bold tracking-tight text-white font-cambria drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{recipe.title}</h5>
                                <p class="font-lg text-gray-300 font-cambria text-2xl hidden md:block mt-3">{recipe.short_desc}.</p>
                            </div>

                            <a href={"recipe/" + recipe.title} class="mt-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-xl md:ml-3 inline-flex items-center px-3 py-2 font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none font-poppins">
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

        </div>

    );
}

export default Featured;