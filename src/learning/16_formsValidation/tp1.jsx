import { useRef, useState } from "react";

export default function Validation1() {
  const [errors, setErrors] = useState([]); // Tableau d'erreurs
  const inputPassWord = useRef();

  const validateInput = () => {
    const data = {
      password: inputPassWord.current.value, // Récupération de la valeur du mot de passe
    };

    // Réinitialisation des erreurs avant la validation
    setErrors([]);

    let isFormValid = true;

    // Validation si le mot de passe est vide
    if (data.password.trim() === "") {
      setErrors((prevState) => [...prevState, "Mot de passe requis"]);
      isFormValid = false;
    } 
    // Validation si le mot de passe est trop court
    else if (data.password.length < 4) {
      setErrors((prevState) => [
        ...prevState,
        "Mot de passe trop faible (minimum 4 caractères)",
      ]);
      isFormValid = false;
    } 
    // Validation si le mot de passe contient uniquement des caractères identiques (4 caractères majuscules, minuscules ou chiffres)
    else if (
      data.password.match(/^([a-z]{4}|[A-Z]{4}|[0-9]{4})$/)
    ) {
      setErrors((prevState) => [
        ...prevState,
        "Mot de passe moyen (4 caractères identiques ou de même type)",
      ]);
      isFormValid = false;
    } 
    // Validation pour un mot de passe plus fort (avec mélange de majuscules, minuscules et chiffres)
    else if (
      data.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,}$/)
    ) {
      setErrors((prevState) => [
        ...prevState,
        "Mot de passe fort",
      ]);
    }

    return isFormValid; // Retourne si le formulaire est valide ou non
  };

  return (
    <div className="container w-75 mt-4">
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Mot de passe
        </label>
        <input
          type="text"
          className="form-control"
          id="password"
          ref={inputPassWord}
        />
        <button
          type="button"
          className="btn btn-primary mt-3"
          onClick={validateInput} // Appel à la fonction de validation
        >
          Valider
        </button>

        {/* Affichage des erreurs si elles existent */}
        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
