import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div >
      <ul className="nav justify-content-between bg-dark text-light py-2">
        <li className="nav-item">
          <h5 className="text-white ms-4">GS Exames</h5>
        </li>
        <li className="nav-item">
        <Link  className="nav-link text-light d-inline " to='/'> Acceuil</Link>
        <Link  className="nav-link text-light d-inline" to='/listmodules'> Listes des modules</Link>
        </li>
      </ul>
    </div>
  );
}
