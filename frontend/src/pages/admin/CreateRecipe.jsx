
import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import { getTags } from '../../api/tag';
import { postRecipe } from '../../api/recipe'

function CreateRecipe() {

    const [ingredientValues, setIngredientValues] = useState([{amt: "", ing: ""}]);
    const [stepValues, setStepValues] = useState([{step: "", img: ""}]);
    const [tags, setTags] = useState([]);
    const [cboxes, setCboxes] = useState({});

    const [newRecipe, setNewRecipe] = useState({
        title: '',
        short_desc: '',
        img: '',
        prep_time: '',
        cook_time: '',
        servings: '',
        tags: {},
        more_info: '',
        ingredients: [],
        steps: [],
    })

    useEffect(() => {
        getTags(setTags);
    }, []);

    // Ingredient Handlers
    let handleIngredientChange = (i, e) => {
        let newIngredientValues = [...ingredientValues];
        newIngredientValues[i][e.target.name] = e.target.value;
        setIngredientValues(newIngredientValues);
        setNewRecipe({ ...newRecipe, ingredients: ingredientValues })
    }

    let addIngredientFields = () => {
        setIngredientValues([...ingredientValues, {amt: "", ing: ""}]);
    }

    let removeIngredientFields = (i) => {
        let newIngredientValues = [...ingredientValues];
        newIngredientValues.splice(i, 1);
        setIngredientValues(newIngredientValues);
    }

    // Instructions/steps handler
    let handleStepChange = (i, e) => {
        let newStepValues = [...stepValues];
        newStepValues[i][e.target.name] = e.target.value;
        setStepValues(newStepValues);
        setNewRecipe({ ...newRecipe, steps: stepValues })
    }

    let addStepFields = () => {
        setStepValues([...stepValues, {step: "", img: ""}]);
    }

    let removeStepFields = (i) => {
        let newStepValues = [...stepValues];
        newStepValues.splice(i, 1);
        setStepValues(newStepValues);
    }

    let handleTags = ({ target }) => {
        let newCboxes = {...cboxes};
        newCboxes[target.value] = target.checked;
        setCboxes(newCboxes)
        setNewRecipe({ ...newRecipe, tags: newCboxes})
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        postRecipe(newRecipe)
    }

    return (
        <div>
            <Header/>

            <div className="mt-10">

                <form className="max-w-2xl mx-5 lg:ml-36" onSubmit={handleSubmit}>

                {/* Recipe Title */}

                <div className="relative z-0 w-full mb-5 group">
                        <input 
                            type="text" 
                            name="recipe_title" 
                            id="recipe_title" 
                            value={newRecipe.title} 
                            onChange={(e) => setNewRecipe({ ...newRecipe, title: e.target.value })} 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder=" " 
                            required />
                        <label for="recipe_title" className="peer-focus:font-bold absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Recipe Title</label>
                </div>

                {/* Short description */}

                <div className="relative z-0 w-full mb-5 group">
                        <label for="recipe_short_desc" className="block mb-2 text-sm font-bold text-black">Short introduction description to recipe</label>
                        <textarea 
                            type="text" 
                            name="recipe_short_desc" 
                            id="recipe_short_desc" 
                            value={newRecipe.short_desc}
                            onChange={(e) => setNewRecipe({ ...newRecipe, short_desc: e.target.value })}
                            className="block w-full p-4 text-gray-900 border border-black rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" 
                            placeholder=" " 
                            required />
                </div>

                {/* Image upload */}                
                <div className="relative z-0 w-full mb-5 group">
                    <label className="block mb-2 text-sm font-bold text-gray-900" for="file_input">Upload recipe main image</label>
                    <input 
                        className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none" 
                        id="file_input" 
                        type="file" 
                        value={newRecipe.img}
                        onChange={(e) => setNewRecipe({ ...newRecipe, img: e.target.value })}
                        required/>
                </div>

                {/* Prep Time */}

                <div className="relative z-0 w-full mb-5 group">
                    <label for="prep_time" className="block mb-2 text-sm font-bold text-black">Preparation time (number of minutes)</label>
                    <input 
                        type="number-input" 
                        id="prep_time" 
                        value={newRecipe.prep_time}
                        onChange={(e) => setNewRecipe({ ...newRecipe, prep_time: e.target.value})}
                        className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" 
                        required/>
                </div>

                {/* Cook Time */}

                <div className="relative z-0 w-full mb-5 group">
                    <label for="cook_time" className="block mb-2 text-sm font-bold text-black">Cooking time (number of minutes)</label>
                    <input 
                        type="number-input" 
                        id="cook_time" 
                        value={newRecipe.cook_time}
                        onChange={(e) => setNewRecipe({ ...newRecipe, cook_time: e.target.value})}
                        className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" 
                        required/>
                </div>

                {/* Servings */}
                <div className="relative z-0 mb-5 group">
                    <label for="servings" className="block mb-2 text-sm font-bold text-black">Servings</label>
                    <input 
                        type="number-input" 
                        id="servings" 
                        value={newRecipe.servings}
                        onChange={(e) => setNewRecipe({ ...newRecipe, servings: e.target.value })}
                        className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" 
                        required/>
                </div>

                {/* Tags */}
                <label for="tags" className="block mb-2 text-sm font-bold text-gray-900">Tags</label>
                <div class="columns-4 mb-4">
                    {tags.map((element, index) => (
                        <div>
                            <input 
                                id={element.title} 
                                checked={tags[element.title]}
                                onClick={handleTags}
                                type="checkbox" 
                                value={element.title} 
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"/>
                            <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900">{String(element.title).charAt(0).toUpperCase() + String(element.title.slice(1))}</label>
                        </div>
                    ))}

                </div>
                
                {/* Long description */}
                <div className="relative z-0 w-full mb-5 group">
                        <label for="recipe_long_desc" className="block mb-2 text-sm font-bold text-black">More information about recipe</label>
                        <textarea 
                            type="text" 
                            name="recipe_long_desc" 
                            id="recipe_long_desc" 
                            value={newRecipe.more_info}
                            onChange={(e) => setNewRecipe({ ...newRecipe, more_info: e.target.value })}
                            className="block w-full p-4 text-gray-900 border border-black rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" 
                            placeholder=" " 
                            required />
                </div>
                
                {/* Ingredients */}
                <p className="block mb-2 text-sm text-black font-bold">Ingredients</p>

                {ingredientValues.map((element, index) => (
                    <div className="relative z-0 mb-5 group" key={index}>

                            <div className="flex gap-x-3">
                            <input type="text" name="amt" value={element.name} onChange={e => handleIngredientChange(index, e)} className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" required placeholder="Amount (e.g. 1 lb)" />
                            <input type="text" name="ing" value={element.name} onChange={e => handleIngredientChange(index, e)} className="block p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" required placeholder="Ingredient (e.g. tomato)" />
                            
                            {
                                index === ingredientValues.length - 1 ?
                                <button type="button" onClick={() => removeIngredientFields(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 mt-1 text-red-700" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                                </button>
                                : null
                            }
            
                            </div>
                    </div>
                ))}
                
                <button type="button" onClick={() => addIngredientFields()} className="text-white bg-green-600 hover:bg-green-950 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-3">
                <div className="flex">
                    Add ingredient
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 rounded-full ml-3 text-green-800 border border-green-800 bg-green800" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </div>
                </button>

                {/* Instructions */}
                
                <p className="block mb-2 text-sm text-black font-bold">Instructions</p>

                {stepValues.map((element, index) => (
                    <div className="relative z-0 w-full mb-5 group" key={index}>
                    <div className="flex">
                        <label for="step" className="block mb-2 text-sm font-medium text-black">Step {index + 1}</label>

                        {
                            index === stepValues.length - 1 ?
                            <button type="button" onClick={() => removeStepFields(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 mb-2 ml-3 text-red-700" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                            </button>
                            : null
                        }
                    </div>
            
                    <textarea type="text" name="step" value={element.name} onChange={e => handleStepChange(index, e)} className="block w-full p-4 text-gray-900 border border-black rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500" placeholder=" " required />
                    <input type="file" name="img" value={element.name} onChange={e => handleStepChange(index, e)} className="block mt-3 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"/>
                    
                    </div>
                ))}

                <button type="button" onClick={() => addStepFields()} className="text-white bg-green-600 hover:bg-green-950 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-3">
                <div className="flex">
                    Add step
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-6 rounded-full ml-3 text-green-800 border border-green-800 bg-green800" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </div>
                </button>

                
                <p class="mb-5">Recipe page will be added with URL /recipe/{"<recipe_name>"}</p>
    
                <button 
                    type="button" 
                    onClick={handleSubmit}
                    className="text-white bg-indigo-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

                </form>
            </div>


            <Footer/>
        </div>
    )
}

export default CreateRecipe