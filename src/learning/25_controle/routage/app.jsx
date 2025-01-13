import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page3 from "./pages/home";
import NavRouter from "./nav";
import Page2 from "./pages/contact";
import Page1 from "./pages/blogs";

export default function AppRouterEfm() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavRouter/>}>
            <Route index element={<Page3/>} />
            <Route path="/blogs" element={<Page1/>} />
            <Route path="/contact" element={<Page2/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
