import React, {useState, useEffect} from 'react';
import '../index.css'
import { getLatestThreeRecipes } from '../api/recipe';

function NewRecipes() {

    let [recipes, setRecipes] = useState([{}, {}, {}]);

    useEffect(() => {
        getLatestThreeRecipes(setRecipes)
    }, [])

    return (
        <div class="h-fit max-md:mx-3">
            <div class="flex justify-center">
                <div class="max-w-screen-xl w-screen relative flex items-center mt-20">
                    <div class="mr-5 flex-grow border-t border-8 border-indigo-950"></div> <h1 class="font-bold text-2xl font-poppins">NEWEST RECIPES</h1> <div class="ml-5 flex-grow border-t border-8 border-indigo-950"></div>
                </div>
            </div>
        
            <div class="flex justify-center">
                <div class="w-screen md:grid md:grid-cols-4 max-w-screen-xl justify-self-center mt-5 gap-x-3">
                <div class="col-span-1 grid-rows-2">

                    <figure class="relative w-fit transition-all duration-300 cursor-pointer filter row-span-1 mb-3 gap-x-3">
                    <a href={"recipe/"+ recipes[0].title}>
                        <img class="w-fit object-fill md:h-96" name={recipes[0].title} src={recipes[0].img} alt={recipes[0].title}/>
                    </a>
                        <figcaption class="absolute px-4 text-lg text-black bottom-5 bg-white ml-3">
                            <p class="font-bold text-md">{recipes[0].title}</p>
                        </figcaption>
                    </figure>

                    <figure class="relative w-full transition-all duration-300 cursor-pointer filter row-span-1">
                        <a href={"recipe/"+ recipes[1].title}>
                            <img class="w-fit object-fill" name={recipes[1].title} src={recipes[1].img} alt={recipes[1].title}/>
                        </a>
                        <figcaption class="absolute px-4 text-lg text-black bottom-5 bg-white ml-3">
                            <p class="font-bold text-md">{recipes[1].title}</p>
                        </figcaption>
                    </figure>
                    
                </div>

                <figure class="relative transition-all duration-300 cursor-pointer filter h-full w-full col-span-3 max-md:hidden">
                    <a href={"recipe/"+ recipes[2].title}>
                        <img class="h-full w-full h-96" name={recipes[2].title} src={recipes[2].img} alt={recipes[2].title}/>
                    </a>
                    <figcaption class="absolute px-4 text-lg text-black bottom-5 bg-white ml-3">
                        <p class="font-bold text-md">{recipes[2].title}</p>
                    </figcaption>
                </figure>
                </div>
            </div>
        </div>
    );
}

export default NewRecipes;