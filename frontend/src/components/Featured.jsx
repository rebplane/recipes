import React, {useState, useEffect} from 'react';
import '../index.css'
import { getRandomRecipe, getRecipe } from '../api/recipe';


function Featured() {

    let [recipe, setRecipe] = useState({title: "", short_desc: "", img: ""})

    useEffect(() => {
        getRecipe(setRecipe, "Sausage Spaghetti");
    }, [])

    return (
        <div class="flex justify-center mt-5">
            
            <div class="max-w-screen-xl h-fit">

                {/* <div class="max-w-screen-xl w-screen relative flex items-center my-10 md:mx-5 max-md:my-5">
                    <div class="mr-5 flex-grow border-t border-8 border-indigo-950 max-md:hidden"></div>
                     <h1 class="font-bold text-2xl font-poppins max-md:hidden">FEATURED</h1> <div class="max-md:hidden ml-5 flex-grow border-t border-8 border-indigo-950"></div>
                </div> */}

                

                <figure class="relative transition-all duration-300 max-md:mx-3 align-center">
                    <img class="h-[90vh] w-screen" src={recipe.img} alt={recipe.title}/>
                    <div class="w-full absolute bottom-44 rounded-lg p-4font-lexend font-bold text-white text-center">
                    <h1 class="text-7xl drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">{recipe.title}</h1>
                    <a href={"recipe/" + recipe.title} class="mt-10 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)] text-2xl md:ml-3 inline-flex items-center px-3 py-2 font-medium text-center text-white bg-transparent rounded-lg hover:bg-indigo-800 focus:outline-none font-lexend border border-white">
                        RECIPE
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    
                    </a>
                    </div>
                    

                </figure>


                
                <div>
                    
                </div>
            </div>

        </div>


    );
}

export default Featured;