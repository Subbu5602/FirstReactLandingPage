//Entry Point of Application
import React from 'react'; // React library for building UI components
import ReactDOM from 'react-dom/client'; // ReactDOM for rendering React components to the DOM
import App from './App.jsx'; // Importing the main App component of the app
import './index.css'; // Importing global CSS styles for the app
import { BrowserRouter as Router } from 'react-router-dom'; // Importing Router for enabling routing in a React app, allowing different views based on URL

// Rendering the app
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode is a wrapper that helps with identifying potential problems in the app
  <React.StrictMode>
    <Router> 
      <App /> 
    </Router>
  </React.StrictMode>,
)
