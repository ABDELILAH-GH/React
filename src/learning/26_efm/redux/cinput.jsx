
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStagiaire } from "./actions";

const CInput = () => {
  const [nom, setNom] = useState("");
  const [ville, setVille] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nom && ville) {
      dispatch(addStagiaire({ id: Date.now(), nom, ville }));
      setNom("");
      setVille("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ville"
        value={ville}
        onChange={(e) => setVille(e.target.value)}
      />
      <button type="submit">Ajouter Stagiaire</button>
    </form>
  );
};

export default CInput;
