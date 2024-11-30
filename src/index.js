import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import Validation1 from './learning/16_formsValidation/tp1';
// import Page from './learning/15_passingDataFromChildToParent/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


<Validation1/>


  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
