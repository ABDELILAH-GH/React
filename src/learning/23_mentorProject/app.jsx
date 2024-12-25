import React from "react";
import Header from "./Header";
import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import Mentor from "./Mentor";
import Titre2 from "./Titre2";
import Titre3 from "./titre3";
import Titre4 from "./titre4";

export default function AppMentor() {
  return (
    <div>
      <Header />
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/home" element={<Mentor/>}/>
         <Route path="/home/titre2" element={<Titre2/>}/>
         <Route path="/home/titre2/titre3" element={<Titre3/>}/>
         <Route path="/home/titre2/titre3/titre4" element={<Titre4/>}/>
      </Routes>
    </div>
  );
}
