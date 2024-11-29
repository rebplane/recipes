import React from 'react'
import '../index.css'

function NewRecipes() {
    return (
        <div flex>
            <div class="flex justify-center mt-5">
                <div class="max-w-screen-md w-screen">
                    <h1 class="font-bold">New Recipes</h1>
                </div>
            </div>
        
            <div class="flex justify-center">
                <div class="w-screen grid grid-cols-5 max-w-screen-md justify-self-center mt-5">
                <div class="col-span-2 grid-rows-2">

                    <figure class="relative w-fit transition-all duration-300 cursor-pointer filter h-50 row-span-1 mb-3">
                    <a href="#">
                        <img class="h-full w-fit object-fill" src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg" alt="image description"/>
                    </a>
                    <figcaption class="absolute px-4 text-lg text-black bottom-5 bg-white ml-3">
                        <p class="font-bold text-md">Burger</p>
                    </figcaption>
                    </figure>

                    <figure class="relative w-full transition-all duration-300 cursor-pointer filter h-50 row-span-1">
                        <a href="#">
                            <img class="h-full w-fit object-fill" src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg" alt="image description"/>
                        </a>
                        <figcaption class="absolute px-4 text-lg text-black bottom-5 bg-white ml-3 text-center">
                            <p class="font-bold text-md">Burger</p>
                        </figcaption>
                    </figure>
                    
                </div>

                <figure class="relative transition-all duration-300 cursor-pointer filter h-full w-full col-span-3 ml-3">
                <a href="#">
                    <img class="h-full w-full" src="https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_2560%2Cc_limit/20231120-WEB-Lasanga-6422.jpg" alt="image description"/>
                </a>
                <figcaption class="absolute px-4 text-lg text-black bottom-5 bg-white ml-3">
                    <p class="font-bold text-md">Lasagna</p>
                </figcaption>
                </figure>
                </div>
            </div>
        </div>
    );
}

export default NewRecipes;