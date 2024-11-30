import React from 'react'
import '../index.css'

function Featured() {
    return (
        <div class="mt-10">
            <div class="flex flex-row justify-center">
                <div class="max-w-screen-xl bg-indigo-950">
                    <a href="#" class="flex md:flex-row text-center items-center w-screen max-w-full">
                        <img class="h-full w-full" src="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg" alt=""/>
                        
                        <div class="w-full p-5">

                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">Beef Burgers</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400 font-serif">Delicious homemade burgers, made within 30 minutes.</p>
                            </div>

                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:outline-none">
                                RECIPE
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            
                            </a>
                        </div>
                    </a>
                </div>
            </div>

        </div>

    );
}

export default Featured;