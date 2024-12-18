import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Nav from "./pages2/Nav";
import P1 from "./pages2/p1";
import P2 from "./pages2/P2";
import P3 from "./pages2/P3";
export default function Router2(){
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Nav/>}>
                <Route index element = {<P1/>}/>
                <Route path="blogs" element={<P2/>}/>
                <Route path="contact" element={<P3/>}/>
            </Route>
         </Routes>
      
      </BrowserRouter>
   )
}