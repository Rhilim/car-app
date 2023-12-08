import React from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import CarCatalogPage from './CarCatalogPage';
import FavoritesPage from './FavoritesPage';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Car Catalog</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CarCatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
