import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Module() {
  const { nom, nh, regional, dateDebut, heure } = useParams();
  const navigate = useNavigate()
  const handleRetourClick = () => {
   navigate("/listmodules")
  }

  return (
    <div className="container mt-3 w-75">
      <h3 className="d-flex justify-content-start text-danger py-2 mt-2">
       <span className="text-dark ">Le module : </span>  {nom}
      </h3>
      <hr />
      <div className="card shadow-lg border-light mb-4">
        <div className="card-body">
          <h5 className="card-title text-center text-primary mb-3 ">Détails du module</h5>
          <p className="card-text">
            <strong>NH:</strong> {nh}
          </p>
          <p className="card-text">
            <strong>Regional:</strong> {regional}
          </p>
          <p className="card-text">
            <strong>Date Debut:</strong> {dateDebut}
          </p>
          <p className="card-text">
            <strong>Heure d'exam:</strong> {heure}
          </p>
          <button
         type="submit"
         class="btn btn-primary"
         onClick={handleRetourClick}
      >
         Retour 
      </button>
        </div>
      </div>
  </div>
  );
}
