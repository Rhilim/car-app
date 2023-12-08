import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../src/actions/carReducer';
import App from '../src/components/App';
import ErrorBoundary from '../src/components/ErrorBoundary';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </Provider>
  </React.StrictMode>
);
