import './App.css';
import Home from './pages/Home'
import RecipePage from './pages/RecipePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/recipe' element={<RecipePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
