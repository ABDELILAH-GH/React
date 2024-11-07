import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TextField from './learning/2_props-children/TextField';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextField inputName = "FirstName" inputLabel = "FirstName"/>
    <TextField inputName = "LastName" inputLabel = "LastName">
      hello this is abdelilah i'm full satck devloper
      </TextField>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
