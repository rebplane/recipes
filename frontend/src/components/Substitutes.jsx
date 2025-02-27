import React, {useState, useEffect} from 'react';
import '../index.css'
import { getSubstitutions } from '../api/sub';

function Substitutes() {

    const [substitute, setSubstitute] = useState("");
    const [results, setResults] = useState({status: "", substitutes: [], message: ""})

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        console.log(substitute);
        getSubstitutions(substitute, setResults)
    }

    return (
        <div>
            <br></br>
            <h1 class="font-bold text-3xl md:mt-5 mb-5 font-poppins">Substitutes</h1>

            <p class="text-base text-xl">Unable to eat an ingredient? Don't have it at home? Enter it here to find a substitute.</p>

            <div class="md:flex">
                <input 
                type="text" 
                name="subst" 
                id="subst" 
                value={substitute}
                onChange={(e) => setSubstitute(e.target.value)}
                className="mt-3 block py-2.5 px-2 w-1/2 text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer dark:bg-gray-500 rounded-lg dark:text-white dark:placeholder-gray-300" 
                placeholder="Enter your ingredient here, e.g., butter" 
                required />

                <button 
                type="button" 
                onClick={handleOnSubmit}
                className="md:ml-5 mt-5 text-white bg-indigo-800 hover:bg-blue-800 h-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center">Submit</button>
            </div>
            
            {results.status ?
            <div className="w-full">
                <p className="text-lg mt-5 dark:text-gray-100">{results.message}</p>
            </div>
            :
            <div></div>}

            {results.substitutes ?
                <ul className="max-w-lg space-y-1 list-disc list-inside">
                {results.substitutes.map(i => 
                <li>{i}</li>
                )}
                </ul>
                :
                <div></div>
            }
        </div>
)};

export default Substitutes;