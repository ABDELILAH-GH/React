import React from "react";
import { Routes, Route } from "react-router-dom";
import ListModule from "./ListModule";
import Module from "./Module";
import Header from "./Header";
import Acceuil from "./acceuil";
import Footer from "./Footer";

export default function AppModule() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/listmodules" element={<ListModule />} />
        <Route
          path="/module/:nom/:nh/:regional/:dateDebut/:heure"
          element={<Module />}
        />
      </Routes>
      <Footer/>
    </div>
  );
}
