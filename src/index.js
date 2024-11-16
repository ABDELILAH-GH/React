import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import Header from './learning/11_ToDoList/header/header';
import InputBtn from './learning/11_ToDoList/input-btn/input-btn';
//import List from './learning/7_addElementtoArray&virtualDom/fruitsFunc';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Header/>
<InputBtn/>

</React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
