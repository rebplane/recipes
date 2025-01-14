import React, {useState, useEffect} from 'react'
import '../index.css'
import { userCheck } from '../api/auth';

function Header() {

    const [user, setUser] = useState("");

    useEffect(() => {
        const verifyCookie = async() => {
            let userData = userCheck(setUser);
            return userData;
        };
        verifyCookie();
    }, []);


    return (
        
        <div class="border-0 border-b-4 border-solid border-indigo-900 sticky top-0 z-50">
            <nav class="bg-white sticky dark:bg-gray-950">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/images/rebbychay.png" class="h-9" alt="RebbyChayLogo" /> <h1 class="font-bold text-lg text-indigo-800 font-lexend dark:text-indigo-400">Rebby & Chay</h1>
                </a>
                <div class="flex md:order-2">
                    {user !== "" ?
                        <a href="/user" class="block py-2 px-3 text-gray-900 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent text-zinc-700 md:hover:text-blue-700 md:p-0 text-black md:hover:text-blue-500 hover:bg-gray-700 over:text-white md:hover:bg-transparent border-gray-700 font-poppins dark:text-gray-300">{user.user}</a>
                        :  <a href="/login" class="block py-2 px-3 text-gray-900 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent text-zinc-700 md:hover:text-blue-700 md:p-0 text-black md:hover:text-blue-500 hover:bg-gray-700 over:text-white md:hover:bg-transparent border-gray-700 font-poppins dark:text-gray-300">LOGIN</a>
                    }
                    
                </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-black text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        </div>
                        <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                        <a href="/recipes" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-zinc-700 md:hover:text-blue-700 md:p-0 text-black md:hover:text-blue-500 hover:bg-gray-700 over:text-white md:hover:bg-transparent border-gray-700 font-poppins dark:text-gray-300">RECIPES</a>
                        </li>
                        <li>
                        <a href="/search" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-zinc-700 md:hover:text-blue-700 md:p-0 text-black md:hover:text-blue-500 hover:bg-gray-700 over:text-white md:hover:bg-transparent border-gray-700 font-poppins dark:text-gray-300">SEARCH</a>
                        </li>
                        <li>
                        <a href="/about" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent text-zinc-700 md:hover:text-blue-700 md:p-0 text-black md:hover:text-blue-500 hover:bg-gray-700 over:text-white md:hover:bg-transparent border-gray-700 font-poppins dark:text-gray-300">ABOUT</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

        </div>
      );
}

export default Header