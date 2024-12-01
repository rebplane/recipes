import './App.css';
import Home from './pages/Home'
import RecipePage from './pages/RecipePage';
import RecipeList from './pages/RecipeList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipe' element={<RecipePage/>}></Route>
        <Route path='/recipes' element={<RecipeList/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
