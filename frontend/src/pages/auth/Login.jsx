import React, {useState} from "react";
import Header from "../../components/Header";
import { login } from "../../api/auth";

const Login = () => {

  const [user, setUser] = useState({
    email: '',
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
    login(user);
  }


  return (
    <div>
        <Header/>

        <div class="mt-10 flex justify-center">
            
        <form className="w-1/4 mx-5 mt-5">
            <h1 className="font-bold text-2xl"> Login</h1>
            <div className="relative z-0 w-full mb-5 group">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                <input type="email" name="email" value={user.email} onChange={handleOnChange} id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />
            </div> 
            <div class="relative z-0 w-full mb-5 group">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" value={user.password} onChange={handleOnChange} id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required />
            </div> 
           
            <button type="button" onClick={handleOnSubmit} class="text-white bg-purple-950 mt-5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-cente">Submit</button>
        </form>
    </div>
    </div>
  );
};

export default Login