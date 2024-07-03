import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import './index.css'; // If you have any global CSS

// Create the root element for React
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app with Redux provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
