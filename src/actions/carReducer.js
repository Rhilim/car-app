import {
  FETCH_CARS_REQUEST,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAILURE,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} from '../actions/carActions.js';


const initialState = {
  cars: [],
  favorites: [],
  loading: false,
  error: '',
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_CARS_SUCCESS:
      return {
        ...state,
        loading: false,
        cars: action.payload,
        error: '',
      };

    case FETCH_CARS_FAILURE:
      return {
        ...state,
        loading: false,
        cars: [],
        error: action.payload,
      };

    case ADD_TO_FAVORITES:
      const carIdToAdd = action.payload;
      return {
        ...state,
        favorites: [...state.favorites, carIdToAdd],
      };

    case REMOVE_FROM_FAVORITES:
      const carIdToRemove = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== carIdToRemove),
      };

    default:
      return state;
  }
};

export default carReducer;

