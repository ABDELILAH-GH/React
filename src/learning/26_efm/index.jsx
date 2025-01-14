import React, { useRef, useState } from "react";

export default function AjouterStagiaire() {
  const [data, setData] = useState([
    
  ]);
  const [error, setError] = useState({});
  const [editerStagiaire, setEditerStagiaire] = useState(null);
  const [stagiaire2, setStagiaire2] = useState([]);
  const inputMatricule = useRef();
  const inputNom = useRef();
  const inputVille = useRef();
  const inputCodePostal = useRef();
  const inputMoyenne = useRef();

  const handleAjouter = () => {
    const FormData = {
      id: data.length + 1,
      nom: inputNom.current.value,
      matricule: inputMatricule.current.value,
      ville: inputVille.current.value,
      codepostal: inputCodePostal.current.value,
      moyenne: inputMoyenne.current.value,
    };

    let isFromValide = true;
    let messageError = {};

    if (FormData.matricule.trim() === "") {
      messageError.matricule = "Matricule obligatoire !";
      isFromValide = false;
    } else if (data.find((item) => item.matricule === FormData.matricule)) {
      messageError.matricule = "Le matricule doit être unique !";
      isFromValide = false;
    }

    if (FormData.nom.trim() === "") {
      messageError.nom = "Nom obligatoire !";
      isFromValide = false;
    }
    if (FormData.ville.trim() === "") {
      messageError.ville = "Ville obligatoire !";
      isFromValide = false;
    }
    if (FormData.codepostal.trim() === "") {
      messageError.codepostal = "Code postal obligatoire !";
      isFromValide = false;
    }
    if (FormData.moyenne.trim() === "") {
      messageError.moyenne = "Moyenne obligatoire !";
      isFromValide = false;
    } else {
      const moyenne = parseFloat(FormData.moyenne);
      if (isNaN(moyenne) || moyenne < 0 || moyenne > 20) {
        messageError.moyenne = "La moyenne doit être entre 0 et 20 !";
        isFromValide = false;
      }
    }
    //
    if (isFromValide) {
      setError({});
      if (editerStagiaire) {
        setData((prevState) =>
          prevState.map((item) =>
            item.id === editerStagiaire.id ? FormData : item
          )
        );
        setEditerStagiaire(null);
      } else {
        setData((prevState) => [...prevState, FormData]);
      }
    } else {
      setError(messageError);
    }
  };

  const handleSupprimer = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };
  const handleVider = () => {
    inputNom.current.value = "";
    inputMatricule.current.value = "";
    inputVille.current.value = "";
    inputCodePostal.current.value = "";
    inputMoyenne.current.value = "";
  };
  const handleEditer = (id) => {
    const stagiare = data.find((item) => item.id === id);
    setEditerStagiaire(stagiare);
    inputNom.current.value = stagiare.nom;
    inputMatricule.current.value = stagiare.matricule;
    inputCodePostal.current.value = stagiare.codepostal;
    inputMoyenne.current.value = stagiare.moyenne;
    inputVille.current.value = stagiare.ville;
  };

  const handleFiltrer = () => {
    const nomFiltre = inputNom.current.value.trim().toLowerCase(); // Récupérer et formater la valeur du nom
    const villeFiltre = inputVille.current.value.trim().toLowerCase(); // Récupérer et formater la valeur de la ville

    const resultatsFiltres = data.filter((stagiaire) => {
      const nomMatch = stagiaire.nom.toLowerCase().includes(nomFiltre);
      const villeMatch = stagiaire.ville.toLowerCase().includes(villeFiltre);
      return nomMatch && villeMatch;
    });

    setStagiaire2(resultatsFiltres); // Stocker les résultats filtrés
  };

  const rechercherInitialiser = () => {
      setStagiaire2([]);
  }

  const getMoyennesStats = () => {
    if (data.length === 0) return { max: 0, min: 0, average: 0 };

    const moyennes = data.map((stagiaire) => parseFloat(stagiaire.moyenne));
    const maxMoyenne = Math.max(...moyennes);
    const minMoyenne = Math.min(...moyennes);
    const averageMoyenne =
      moyennes.reduce((acc, curr) => acc + curr, 0) / moyennes.length;

    return { max: maxMoyenne, min: minMoyenne, average: averageMoyenne };
  };
  const { max, min, average } = getMoyennesStats();

  return (
    <div className="container mt-3 w-75">
      {data.length === 0 ? (
        <h3 className="d-flex justify-content-center text-danger">
          La liste des stagiaires est : <strong>vide</strong>
        </h3>
      ) : (
        <h3 className="d-flex justify-content-center">
          La liste des stagiaires
        </h3>
      )}
      <hr className="text-danger" />
      <div className="table-responsive">
        <table className="table">
          <thead className="table-primary">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Matricule</th>
              <th scope="col">Nom</th>
              <th scope="col">Ville</th>
              <th scope="col">CodePostal</th>
              <th scope="col">Moyenne</th>
              <th scope="col">Supprimer</th>
              <th scope="col">Editer</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <tr>{item.id}</tr>
                <td>{item.matricule}</td>
                <td>{item.nom}</td>
                <td>{item.ville}</td>
                <td>{item.codepostal}</td>
                <td>{item.moyenne}</td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={() => handleSupprimer(item.id)}
                  >
                    Supprimer
                  </button>
                </td>
                <td>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => handleEditer(item.id)}
                  >
                    Editer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="submit" className="btn btn-primary text-light" onClick={handleAjouter}>
        Ajouter
      </button>
      <button
        type="submit"
        className="btn btn-warning text-light ms-2"
        onClick={handleVider}
      >
        Vider
      </button>
      <button
        type="submit"
        className="btn btn-info  text-light ms-2"
        onClick={handleFiltrer}
      >
        Filtrer Nom et Ville
      </button>
      <button
        type="submit"
        className="btn btn-dark text-light ms-2"
        onClick={rechercherInitialiser}
      >
        Vider listes
      </button>

      <h3>Moyennes des Stagiaires</h3>
      <ul>
        <li>Moyenne la plus élevée : {max}</li>
        <li>Moyenne la plus basse : {min}</li>
        <li>Moyenne générale : {average.toFixed(2)}</li>
      </ul>



      <hr className="text-danger mt-3" />
      {
        stagiaire2.length === 0 ? (<h2 className="text-danger">Listes est vide !!</h2>) : <h2>Listes</h2>
      }
      <ul>
        {stagiaire2.map((item) => (
          <li key={item.id}>
            <strong>Nom:</strong>{item.nom} - <strong>Ville:</strong>{item.ville} - <strong>Matricule:</strong>{item.matricule}
          </li>
        ))}
      </ul>
<hr />
      <h2 className="text-success mt-3">Formulaire d'ajout</h2>
      <hr className="text-danger w-25" />

      <form>
        <div className="mb-3">
          <label htmlFor="" className="form-label ">
            ID
          </label>
          <input type="text" className="form-control" disabled name="id" />
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Matricule
          </label>
          <input
            type="text"
            className="form-control"
            name="matricule"
            ref={inputMatricule}
          />
          {error.matricule && (
            <small className="text-danger">{error.matricule}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className="form-control"
            name="nom"
            ref={inputNom}
          />
          {error.nom && <small className="text-danger">{error.nom}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Ville
          </label>
          <input
            type="text"
            className="form-control"
            name="ville"
            ref={inputVille}
          />
          {error.ville && <small className="text-danger">{error.ville}</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Code postal
          </label>
          <input
            type="text"
            className="form-control"
            name="codepostal"
            ref={inputCodePostal}
          />
          {error.codepostal && (
            <small className="text-danger">{error.codepostal}</small>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Moyenne
          </label>
          <input
            type="text"
            className="form-control"
            name="moyenne"
            ref={inputMoyenne}
          />
          {error.moyenne && (
            <small className="text-danger">{error.moyenne}</small>
          )}
        </div>
      </form>
    </div>
  );
}
