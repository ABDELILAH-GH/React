import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./nav";
import Blogs from "./pages/Blogs";
import BlogsPost from "./pages/BlogsPost";
export default function AppDenamique() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav/>}>
          <Route index element={<Blogs/>}/>
          <Route path="/blogs/:blogId" element={<BlogsPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
