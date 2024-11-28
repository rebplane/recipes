import React from 'react'
import '../index.css'

function Featured() {
    return (
        <div class="mt-10">
        <h1 class="font-bold ml-10">Featured Recipe</h1>
            <div class="mt-5 flex justify-center">
            <a href="#" class="flex flex-col items-center w-screen bg-white border border-gray-200 shadow md:flex-row max-w-full mx-10 dark:border-gray-700 bg-indigo-950">
                <img class="object-cover w-50" src="images/rebbychay.png" alt=""/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Beef Burgers</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Delicious homemade burgers, made within 30 minutes.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-800 focus:outline-none">
                        Recipe
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </a>
            </div>
        </div>

    );
}

export default Featured;