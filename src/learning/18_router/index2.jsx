import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blogs";
import GlobalBlog from "./pages/GlobalBlog"; // Nouvelle page pour Global Blog
import PrivateBlog from "./pages/PrivateBlog"; // Nouvelle page pour Private Blog
import Contact from "./pages/contact";
import PageNotFound from "./pages/notFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />}>
            <Route path="global" element={<GlobalBlog />} />
            <Route path="private" element={<PrivateBlog />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
