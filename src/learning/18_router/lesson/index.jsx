import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Routes} from "react-router-dom"
import {Route} from "react-router-dom"
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import PageNotFound from "./pages/notFound";
export default function Router(){
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout/>}>
                  <Route index element={<Home/>}/>
                  <Route path="blogs" element={<Blogs/>}/>
                  <Route path="contact" element = {<Contact/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}>
            </Route>
         </Routes>
      </BrowserRouter>
   )
}