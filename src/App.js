import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Navbar from './components/Navbar';
import SingleCocktail from './pages/SingleCocktail';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:id' element={<SingleCocktail />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
