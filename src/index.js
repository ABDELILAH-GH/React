import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header, { Content } from './learning/1_components/tp';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
   <Header/>
   <Content>
    <p>hello this abdelilah i'm full stack devloper</p>
    <p>hihihihiihihihihihihihihihihihihihihihihihihihihi</p>
    </Content>
   <Content>
    <p>nom i'm so excited to learn react js"</p>
    <p>yapayapyapyapya^pyapyapyapyayapyap"</p>
    </Content>
   <Content>
    <p>I found a react not hard like people said because i learned EcmaSCript before i started react</p>
    <p>I found a react not hard like people said because i learned EcmaSCript before i started react</p>
    </Content>
   
   
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
