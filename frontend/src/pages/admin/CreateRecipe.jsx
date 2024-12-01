
import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function CreateRecipe() {
  return (
    <div>
        <Header/>

        <div class="mt-10">

            <form class="max-w-2xl mx-5 lg:ml-36">


            <div class="relative z-0 w-full mb-5 group">
                    <input type="text" name="recipe_title" id="recipe_title" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="recipe_title" class="peer-focus:font-medium absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Recipe Title</label>
            </div>

            <div class="relative z-0 w-full mb-5 group">
                    <label for="recipe_short_desc" class="block mb-2 text-sm font-medium text-black">Short introduction description to recipe</label>
                    <input type="text" name="recipe_short_desc" id="recipe_short_desc" class="block w-full p-4 text-gray-900 border border-black rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
            </div>

            
            <div class="relative z-0 w-full mb-5 group">
                <label class="block mb-2 text-sm font-medium text-gray-900" for="file_input">Upload recipe main image</label>
                <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" id="file_input" type="file"/>
            </div>

            <div class="relative z-0 w-full mb-5 group">
                <label for="prep_time" class="block mb-2 text-sm font-medium text-black">Preparation time (number of minutes)</label>
                <input type="text" id="prep_time" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <div class="relative z-0 w-full mb-5 group">
                <label for="cook_time" class="block mb-2 text-sm font-medium text-black">Cooking time (number of minutes)</label>
                <input type="text" id="cook_time" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500"/>
            </div>

            <div class="relative z-0 w-full mb-5 group">
                    <label for="tags" class="block mb-2 text-sm font-medium text-black">Tags (separate with comma, no spaces)</label>
                    <input type="text" name="tags" id="recipe_short_desc" class="block w-full p-4 text-gray-900 border border-black rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
            </div>

            <div class="relative z-0 w-full mb-5 group">
                    <label for="recipe_long_desc" class="block mb-2 text-sm font-medium text-black">More information about recipe</label>
                    <input type="text" name="recipe_long_desc" id="recipe_long_desc" class="block w-full p-4 text-gray-900 border border-black rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
            </div>


           
            <button type="submit" class="text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            
            {/* Ingredients and steps todo */}
            </form>
        </div>


        <Footer/>
    </div>
  )
}

export default CreateRecipe