import './App.css';
import Home from './pages/Home'
import RecipePage from './pages/RecipePage';
import RecipeList from './pages/RecipeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateRecipe from './pages/admin/CreateRecipe';
import axios from 'axios';
import Login from './pages/auth/Login';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';
import SignUp from './pages/auth/SignUp';


// axios.defaults.baseURL = "https://recipes-wzua.onrender.com/api/";
axios.defaults.baseURL = "http://localhost:5000/api/"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipe' element={<RecipePage/>}></Route>
        <Route path='/recipes' element={<RecipeList/>}></Route>
        <Route path='/recipe/:title' element={<RecipePage/>}></Route>

        <Route path='/blog' element={<ComingSoon/>}></Route>
        <Route path='/favorites' element={<ComingSoon/>}></Route>
        <Route path='/about' element={<About/>}></Route>

        <Route path='/signup' element={<SignUp/>}></Route>

        <Route path='/login' element={<Login/>}></Route>

        <Route path='/admin/create' element={<CreateRecipe/>}></Route>
        <Route path='/admin/edit/:title' element={<CreateRecipe/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
