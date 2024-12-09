import './App.css';
import Home from './pages/Home'
import RecipePage from './pages/RecipePage';
import RecipeList from './pages/RecipeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateRecipe from './pages/admin/CreateRecipe';
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:5000/api/";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipe' element={<RecipePage/>}></Route>
        <Route path='/recipes' element={<RecipeList/>}></Route>
        <Route path='/admin/create' element={<CreateRecipe/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
