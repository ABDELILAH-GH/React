import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutDn from "./components/layout";
import BlogsDn from "./pages/Blogs";
import BlogPost from "./pages/BlogsPost";


export default function AppDn() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutDn />}>
          <Route index element={<BlogsDn />} />
          <Route path="blogs/:blogId" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
