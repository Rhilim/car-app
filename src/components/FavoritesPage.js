import React from 'react';
import { useSelector } from 'react-redux';
import CarCard from './CarCard';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);
  const cars = useSelector((state) => state.cars);

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div>
      <h2>Favorites</h2>
      <div className="car-list">
        {favoriteCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;