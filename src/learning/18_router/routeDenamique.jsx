import React from "react";
import { Link } from "react-router-dom";

export default function RouteDynamique() {
  const table = ["anas", "ahmed", "ali", "yassine", "moussa", "khalid", "amine", "badr"];
  return (
    <div className="container mt-3 w-75">
      <ul>
        {table.map((item, index) => (
          <li key={index}>
            <Link to={`/team/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
