import React, { useState } from 'react';
import P_two from './child';

export default function P_one() {
  const [couleur, setCouleur] = useState('red');

  const handleColor = (color) => {
    setCouleur(color); // Met à jour la couleur
  };

  return (
    <div className="container my-4">
      {/* Affichage de la couleur */}
      <div
        style={{
          backgroundColor: couleur,
          height: '100px', // Hauteur du div
          width: '100%', // Largeur du div
          border: '1px solid #000', // Bordure pour mieux visualiser
          marginBottom: '20px', // Espacement
        }}
      ></div>
      <P_two handleColor={handleColor} />
    </div>
  );
}
