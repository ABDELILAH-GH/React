import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Filiere from './learning/4_state/tp3Class';
//import Rev from './learning/7_addElementtoArray&virtualDom/rev';
// import ToggleName from './learning/8_compLifeCycle/toggleName';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <ToggleName /> */}
  {/* <Rev/> */}
  <Filiere/>
</React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
