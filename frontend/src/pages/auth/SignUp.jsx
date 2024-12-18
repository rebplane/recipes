import React, {useState, useEffect } from "react";
import Header from "../../components/Header";
import { signup, navigateFromAuth } from "../../api/auth";

const SignUp = () => {

  const [user, setUser] = useState({
    email: '',
    username: '',
    password: ''
  })

  const handleOnChange = (e) => {
    setUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    signup(user);
  }

  useEffect(() => {
    const verifyCookie = async() => {
        let userData = navigateFromAuth(setUser);
        return userData;
    };
    verifyCookie();
}, []);


  return (
    <div>
        <Header/>

        <div class="mt-10 flex justify-center">
            
        <form className="w-1/4 mx-5 mt-5">
            <h1 className="font-bold text-2xl"> Sign Up </h1>
            <div className="relative z-0 w-full mb-5 group mt-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                <input type="email" name="email" value={user.email} onChange={handleOnChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            </div> 
            <div className="relative z-0 w-full mb-5 group">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                <input type="text" name="username" value={user.username} onChange={handleOnChange} id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="e.g. coolchef123" required />
            </div> 
            <div class="relative z-0 w-full mb-5 group">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" value={user.password} onChange={handleOnChange} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
            </div> 
           
            <button type="button" onClick={handleOnSubmit} class="text-white bg-purple-950 mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-cente">Submit</button>
            
            <div className="mt-10">
                Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login here.</a>
            </div>
        
        </form>
    </div>
    </div>
  );
};

export default SignUp