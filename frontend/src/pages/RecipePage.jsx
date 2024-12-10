
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function RecipePage() {
  return (
    <div>
        <Header/>

        <div class="flex justify-center">
            <div class="flex-col mt-5 max-w-screen-xl space-y-5 ml-5 mr-5 md:ml-0 md:mr-0">

                    <h1 class="font-bold text-2xl">Lasagna</h1>

                    <p class="text-md">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                    </p>

                    <div class="grid grid-cols-2 gap-5">
                        <img class="col-span-1" src="https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_2560%2Cc_limit/20231120-WEB-Lasanga-6422.jpg" alt="Burger"/>

                        <div class="flex">
                            <div class="max-w-xl border-0 bg-indigo-50 col-span-1 border-0 border-t-4 border-solid border-indigo-900 w-fit">
                                <div class="px-6 py-4">
                                    <p class="text-base">
                                    <b>Prep Time: </b> 10 minutes
                                    </p>
                                </div>

                                <div class="px-6 py-4">
                                    <p class="text-base">
                                    <b>Cooking Time: </b> 50 minutes
                                    </p>
                                </div>

                                <div class="px-6 py-4">
                                    <p class="text-base">
                                    <b>Total Time: </b> 1 hour
                                    </p>
                                </div>

                                <div class="px-6 pt-4 pb-2">
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Vegan</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Easy</span>
                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Healthy</span>
                                </div>
                            </div>
                        </div>

                        <p class="text-md w-fit col-span-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                        <p class="text-md w-fit col-span-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>
                        
                        <p class="text-md w-fit col-span-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                    <div class="max-w-md border-0 bg-indigo-50 col-span-2 border-0 border-t-4 border-solid border-indigo-900">

                        <div class="px-3 py-4 col-span-1 space-y-3">
                            <div class="font-bold text-xl mb-2">Ingredients</div>
                                <div class="flex flex-col space-y-3">
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">1 lbs ground beef</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">1 cup tomato sauce</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">1 tbsp oregano</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">1 cup sliced mushrooms</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">1 cup ricotta cheese</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">1/2 cup mozzarella cheese</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">12 lasagna sheets</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 rounded focus:ring-blue-500 focus:ring-"/>
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium">12 lasagna sheets</label>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <h1 class="font-bold text-2xl">Instructions</h1>
                        <p class="text-md w-fit col-span-2">
                        <b>1) </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                        <p class="text-md w-fit col-span-2">
                        <b>2) </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                        <p class="text-md w-fit col-span-2">
                        <b>3) </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                        <img class="col-span-2" src="https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_2560%2Cc_limit/20231120-WEB-Lasanga-6422.jpg" alt="Burger step"/>

                        <p class="text-md w-fit col-span-2">
                        <b>4) </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                        <p class="text-md w-fit col-span-2">
                        <b>5) </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                        <img class="col-span-2" src="https://assets.bonappetit.com/photos/656f48d75b552734225041ba/1:1/w_2560%2Cc_limit/20231120-WEB-Lasanga-6422.jpg" alt="Burger step"/>

                        <p class="text-md w-fit col-span-2">
                        <b>6) </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>

                        <p class="text-md w-fit col-span-2">
                        <b>7) </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec dui rhoncus, facilisis justo ut, bibendum diam. Duis eu bibendum eros, vel dapibus lorem. Aenean quis mattis tortor. Donec dictum orci a tortor sagittis, eu ultricies risus dapibus. Nam placerat rutrum leo, ac eleifend arcu sollicitudin sed. Maecenas ut dolor a risus luctus ornare nec a odio. 
                        </p>


                    </div>
                    

            </div>
        </div>


        <Footer/>
    </div>
  )
}

export default RecipePage