import React from "react";
import { useParams } from "react-router-dom";

export default function Person() {
  const { nom } = useParams(); 
  return (
    <div className="container w-75 mt-3">
      <h3>Bonjour Monsieur {nom}</h3>
    </div>
  );
}
