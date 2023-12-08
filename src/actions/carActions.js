import axios from 'axios';

// Action Types
export const FETCH_CARS_REQUEST = 'FETCH_CARS_REQUEST';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_FAILURE = 'FETCH_CARS_FAILURE';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

// Action Creators
export const fetchCarsRequest = () => ({
  type: FETCH_CARS_REQUEST,
});

export const fetchCarsSuccess = (cars) => ({
  type: FETCH_CARS_SUCCESS,
  payload: cars,
});

export const fetchCarsFailure = (error) => ({
  type: FETCH_CARS_FAILURE,
  payload: error,
});

export const addToFavorites = (carId) => ({
  type: ADD_TO_FAVORITES,
  payload: carId,
});

export const removeFromFavorites = (carId) => ({
  type: REMOVE_FROM_FAVORITES,
  payload: carId,
});

// Async Action Creator
export const fetchCars = () => {
  return (dispatch) => {
    dispatch(fetchCarsRequest());
    axios.get('https://6512085eb8c6ce52b39541d9.mockapi.io/adverts')
      .then((response) => {
        const cars = response.data;
        dispatch(fetchCarsSuccess(cars));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchCarsFailure(errorMessage));
      });
  };
};