import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* Importing CSS Files */
import './styles/index.css';
import "./styles/app.scss";
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

