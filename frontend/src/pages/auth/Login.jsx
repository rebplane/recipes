import React, {useState, useEffect} from "react";
import Header from "../../components/Header";
import { login, navigateFromAuth } from "../../api/auth";

const Login = () => {

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState(false)

  const handleOnChange = (e) => {
    setUser((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
    }));
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    login(user, setError);
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
            <h1 className="font-bold text-2xl"> Login</h1>
            
            {error ?
                  <div class="max-w-2xl mt-5 bg-red-300 flex p-3 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                  <p class="ml-3 text-black">Email or password is incorrect.</p>
                  </div>
                  : null
              }

            
            <div className="relative z-0 w-full mb-5 group mt-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                <input type="email" name="email" value={user.email} onChange={handleOnChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            </div> 
            <div class="relative z-0 w-full mb-5 group">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input type="password" name="password" value={user.password} onChange={handleOnChange} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
            </div> 
           
            <button type="button" onClick={handleOnSubmit} class="text-white bg-purple-950 mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-cente">Submit</button>
        
            <div className="mt-10">
                Need an account? <a href="/signup" className="text-blue-500 hover:underline">Create an account here.</a>
            </div>

        </form>
    </div>
    </div>
  );
};

export default Login