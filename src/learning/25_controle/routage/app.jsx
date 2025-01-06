import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../18_router/lesson/pages/layout";
import Page3 from "./pages/home";
import Page2 from "./pages/contact";
import Page1 from "./pages/blogs";

export default function AppRoutageEfm() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Page3 />} />
          <Route path="blogs" element={<Page1 />} />
          <Route path="contact" element={<Page2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
