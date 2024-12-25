import React from 'react';
import { Link } from 'react-router-dom';
import gsExams from './images/gsExams.jpg';

export default function Acceuil() {
  return (
   <div 
   className="container-fluid p-0 "
   style={{
     backgroundImage: `url(${gsExams})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height: '100vh', 
     color: 'white',
     position: 'relative'
   }}
 >
      <div className="d-flex justify-content-center align-items-center h-100">
        <div className="text-center p-5 bg-dark bg-opacity-50 rounded-4 ">
          <h2 className="font-weight-bold mb-4 text-danger bg-white bg-opacity-55 rounded-4 ">Bienvenue dans la gestion des examens</h2>
          <p className="lead mb-4">
            Gérez facilement les examens et consultez les modules associés avec notre plateforme moderne et intuitive.
          </p>
          <hr className="my-4 border-top border-light" />
          <p className="text-light mb-4">
            Découvrez la liste des modules disponibles et accédez à des informations détaillées pour chaque module.
          </p>
          <Link 
            to="/listmodules" 
            className="btn btn-primary btn-lg px-5 py-2 shadow-sm"
          >
            Voir les modules
          </Link>
        </div>
      </div>
    </div>
  );
}
