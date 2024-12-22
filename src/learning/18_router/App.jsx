import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Person from "./Person";
import RouteDynamique from "./routeDenamique";


export default function Params() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteDynamique />} />
        <Route path="/team/:nom" element={<Person />} />
      </Routes>
    </BrowserRouter>
  );
}
