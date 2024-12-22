import React from "react";
import { Link } from "react-router-dom";
import "./style.css"; 

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h5 className="navbar-brand text-warning ms-3">Project Name</h5>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/home">
                Titre 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/home/titre2">
                Titre 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/home/titre2/titre3">
                Titre 3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link custom-link" to="/home/titre2/titre3/titre4">
                Titre 4
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
