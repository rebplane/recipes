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
            <div class="flex justify-center max-md:mx-3">
                <div class="max-w-screen-xl w-screen relative flex items-center mt-20">
                    <h1 class="font-bold text-2xl font-lexend">COLLECTION</h1> <div class="ml-5 flex-grow border-t border-4 border-indigo-950"></div>
                </div>
            </div>
        
            <div class="flex justify-center max-md:mx-5">
                <div class="w-screen grid md:grid-cols-3 max-md:grid-cols-1 max-w-screen-xl justify-self-center mt-5 gap-x-3 gap-y-10">
                        {recipes.map((element, index) => (
                        
                        <div>

                            <figure class="relative transition-all duration-300 cursor-pointer filter md:h-96 h-48 max-md:h-96 w-full col-span-1">
                                <a href={"recipe/" + element.title}>
                                    <img class="h-full w-full" src={element.img} alt={element.title}/>
                                    <figcaption class="absolute text-lg text-black bg-white">
                                        <p class="text-indigo-800 hover:underline text-lg font-lexend">{element.title}</p>
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