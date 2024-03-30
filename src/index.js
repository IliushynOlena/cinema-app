import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './contexts/user-context';
import { CounterProvider } from './contexts/counter-reducer';
//import { CounterProvider } from './contexts/counter-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>    
      <CounterProvider>
        <BrowserRouter>
                <App />
          </BrowserRouter>
      </CounterProvider>    
    </UserProvider>  
    
  </React.StrictMode>
);

