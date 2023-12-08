import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/carActions';

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.includes(car.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car.id));
    } else {
      dispatch(addToFavorites(car.id));
    }
  };

  return (
    <div className="car-card">
      <img src={car.img} alt={`${car.make} ${car.model}`} />
      <div className="car-details">
        <h3>{`${car.year} ${car.make} ${car.model}`}</h3>
        <p>{`Type: ${car.type}`}</p>
        <p>{`Rental Price: $${car.rentalPrice.toFixed(2)}/hour`}</p>
        <p>{`Mileage: ${car.mileage.toLocaleString()} km`}</p>
        <button
          onClick={handleToggleFavorite}
          style={{ color: isFavorite ? 'red' : 'black' }}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default CarCard;