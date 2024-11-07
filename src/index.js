import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import IsAdult from './learning/3_jsx/script';
//import Fruit from './learning/3_jsx/fruit';
import State from './learning/4_state/counter';
//const ArrayFruit = ["Orange","Apple","Banana","Lemon","Water Melon"]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <State/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
