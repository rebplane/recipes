import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getTagsByCategory } from '../api/tag';


function SearchPage() {

    const [cuisineTags, setCuisineTags] = useState([]);
    const [restrictionTags, setRestrictionTags] = useState([]);
    const [foodTags, setFoodTags] = useState([]);
    const [cboxes, setCboxes] = useState({});

    let handleTags = ({ target }) => {
        let newCboxes = {...cboxes};
        newCboxes[target.value] = target.checked;
        setCboxes(newCboxes);
    }

    useEffect(() => {
            getTagsByCategory(setCuisineTags, "cuisine");
            getTagsByCategory(setRestrictionTags, "restriction");
            getTagsByCategory(setFoodTags, "food");
    }, []);

    return (
        <div class="dark:bg-gray-950 dark:text-white">
            <Header/>
            <div class="flex justify-center h-screen">
                <div class="dark:bg-gray-950 dark:text-white md:w-3/4">

                    <div class="mt-20 flex justify-center text-center">
                        <h1 class="font-bold text-2xl w-1/2 font-lexend dark:text-white">SEARCH FOR A RECIPE</h1> 
                    </div>
                    
                    <div class="flex justify-center mt-5">
                    <form class="w-1/2">   
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white flex">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none flex">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to cook?" required />
                        </div>
                        
                    </form>
                    <button type="submit" class="ml-3 text-white bg-indigo-950 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:focus:ring-blue-800">Search</button>
                    </div>
                    

                    <div class="mt-20 flex justify-center text-center">
                        <h1 class="font-bold text-2xl w-1/2 font-lexend dark:text-white">FILTERS</h1> 
                    </div>
                    
                    <div class="grid grid-cols-3">
                        <div>
                            <div class="flex justify-center mt-5">
                                <h1 class="text-xl w-1/2 font-lexend dark:text-white">Cuisine</h1> 
                            </div>

                            <div class="flex justify-center">
                                <div class="w-1/2 mb-4 mx-auto mt-3">
                                
                                {cuisineTags.map((element, index) => (
                                    <div class="w-full">
                                        <input 
                                            id={element.title} 
                                            checked={cboxes[element.title]}
                                            // onClick={handleTags}
                                            type="checkbox" 
                                            value={element.title} 
                                            class="w-4 h-4 mb-3 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label for="default-checkbox" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">{String(element.title).charAt(0).toUpperCase() + String(element.title.slice(1))}</label>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-center mt-5">
                                <h1 class="text-xl w-1/2 font-lexend dark:text-white">Food Type</h1> 
                            </div>

                            <div class="flex justify-center">
                                <div class="w-1/2 mb-4 mx-auto mt-3">
                                
                                {foodTags.map((element, index) => (
                                    <div class="w-full">
                                        <input 
                                            id={element.title} 
                                            checked={cboxes[element.title]}
                                            // onClick={handleTags}
                                            type="checkbox" 
                                            value={element.title} 
                                            class="w-4 h-4 mb-3 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label for="default-checkbox" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">{String(element.title).charAt(0).toUpperCase() + String(element.title.slice(1))}</label>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <div class="flex justify-center mt-5">
                                <h1 class="text-xl w-1/2 font-lexend dark:text-white">Diets/Restrictions</h1> 
                            </div>

                            <div class="flex justify-center">
                                <div class="w-1/2 mb-4 mx-auto mt-3">
                                
                                {restrictionTags.map((element, index) => (
                                    <div class="w-full">
                                        <input 
                                            id={element.title} 
                                            checked={cboxes[element.title]}
                                            // onClick={handleTags}
                                            type="checkbox" 
                                            value={element.title} 
                                            class="w-4 h-4 mb-3 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label for="default-checkbox" class="ms-2 text-md font-medium text-gray-900 dark:text-gray-300">{String(element.title).charAt(0).toUpperCase() + String(element.title.slice(1))}</label>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>
            </div>
            
        <Footer/>
        </div>
  )
}

export default SearchPage