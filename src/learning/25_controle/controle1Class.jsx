import React, { useState } from "react";

export default function Controle1Class() {
  const [alph, setAlph] = useState("");
  const [nom, setNom] = useState("");
  const stagiare = [
    { id: 1, nom: "hassan" },
    { id: 2, nom: "houssam" },
    { id: 3, nom: "ali" },
  ];
  const alphabets = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  ];

  const handleSearch = (letter) => {
    setAlph(letter); // Mettre à jour l'alphabet actuel
    const searchAlphabet = letter; // Alphabet sélectionné
    const searchNom = stagiare.find((n) =>
      n.nom.toLowerCase().startsWith(searchAlphabet.toLowerCase())
    ); // Trouver un nom correspondant
    setNom(searchNom ? searchNom.nom : "Aucun nom trouvé");
  };

  return (
    <div className="container w-75 mt-2">
      <h2>
        Alphabet: {alph} | Nom : {nom}
      </h2>

      {alphabets.map((item, key) => (
        <button
          key={key}
          type="button"
          className="btn btn-primary ms-2 mt-2"
          onClick={() => handleSearch(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
