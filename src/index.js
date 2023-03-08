import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkmodeContextProvider } from './Context/DarkmodeContext';
import { AuthContextProvider } from './Context/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkmodeContextProvider>
  </React.StrictMode>
);


