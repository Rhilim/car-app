import React from 'react';

const CarDetailsModal = ({ car, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{`${car.year} ${car.make} ${car.model}`}</h2>
        <p>{`Type: ${car.type}`}</p>
        <p>{`Description: ${car.description}`}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default CarDetailsModal;