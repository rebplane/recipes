import React, {useState, useEffect} from 'react';
import '../index.css'
import { getRecipes } from '../api/recipe';

function Collection() {

    let [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes(setRecipes)
    }, [])

    return (
        <div>


            <div class="flex justify-center mt-5">
                <div class="max-w-screen-xl w-screen relative flex items-center mt-20">
                    <div class="mr-5 flex-grow border-t border-8 border-indigo-950"></div> <h1 class="font-bold text-2xl font-poppins">OUR COLLECTION</h1> <div class="ml-5 flex-grow border-t border-8 border-indigo-950"></div>
                </div>
            </div>
        
            <div class="flex justify-center">
                <div class="w-screen grid grid-cols-3 max-w-screen-xl justify-self-center mt-5 gap-x-3 gap-y-10">
                        {recipes.map((element, index) => (
                        
                        <div>

                            <figure class="relative transition-all duration-300 cursor-pointer filter h-96 w-full col-span-1">
                                <a href={"recipe/" + element.title}>
                                    <img class="h-full w-full" src={element.img} alt={element.title}/>
                                    <figcaption class="absolute text-lg text-black bg-white">
                                        <p class="text-indigo-800 hover:underline text-lg">{element.title}</p>
                                    </figcaption>
                                </a>
                            </figure>


                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );
}

export default Collection;