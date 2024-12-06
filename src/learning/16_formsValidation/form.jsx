import { useRef, useState } from "react";

export default function FormValidation3() {
  const inputName = useRef();
  const inputEmail = useRef();
  const inputMessage = useRef();
  const inputAcceptAllConditions = useRef();
  const [isFormSent, setIsFormSent] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    acceptAllConditions: "",
  });

  // la fonction de validation de formulaire
  const formValidate = () => {
    const data = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      message: inputMessage.current.value,
      acceptAllConditions: inputAcceptAllConditions.current.checked,
    };
    let isFormValid = true;

    // Validation du champ name
    if (data.name.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        name: "Name required!!",
      }));
      isFormValid = false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        name: "",
      }));
    }

    // Validation du champ email
    if (data.email.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email required!!",
      }));
      isFormValid = false;
    } else if (!data.email.match(/^[a-z0-9A-z.-_]+@[a-zA-Z]+\.[a-z]{2,}$/)) {
      setErrors((prevState) => ({
        ...prevState,
        email: "Email format should be like example@domain.ma!!",
      }));
      isFormValid = false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        email: "",
      }));
    }

    // Validation du champ message
    if (data.message.trim() === "") {
      setErrors((prevState) => ({
        ...prevState,
        message: "Message required!!",
      }));
      isFormValid = false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        message: "",
      }));
    }

    // Validation de la condition acceptée
    if (!data.acceptAllConditions) {
      setErrors((prevState) => ({
        ...prevState,
        acceptAllConditions: "Accept conditions should be clicked!!",
      }));
      isFormValid = false;
    } else {
      setErrors((prevState) => ({
        ...prevState,
        acceptAllConditions: "",
      }));
    }

    return isFormValid;
  };

  // fonction pour réinitialiser les valeurs de formulaire après la validation
  const resetForm = () => {
    inputName.current.value = "";
    inputEmail.current.value = "";
    inputMessage.current.value = "";
    inputAcceptAllConditions.current.checked = false;

    // Réinitialisation des états
    setIsFormSent(false);
    setErrors({
      name: "",
      email: "",
      message: "",
      acceptAllConditions: "",
    });
  };

  // fonction principale qui contient toutes les autres fonctions
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = formValidate();

    // pour afficher le message de succès après la validation et aussi réinitialiser le formulaire
    if (isValid === true) {
      setIsFormSent(true);
      resetForm();
    }
  };

  return (
    <div className="container w-75 mt-2">
      {isFormSent ? (
        <div className="alert alert-success" role="alert">
          <strong>Success</strong> Message sent successfully !!
        </div>
      ) : (
        ""
      )}
      {Object.values(errors).some((error) => error) && (
        <div class="alert alert-danger" role="alert">
          <strong>Errors:</strong>
          <ul>
             {Object.entries(errors).map(([key, error]) =>
              error ? <li key={key}>{error}</li> : null
           )}
          </ul>

        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h3>Contact form</h3>
        <hr />
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            ref={inputName}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            ref={inputEmail}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            rows="3"
            ref={inputMessage}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className={`form-check-input ${errors.acceptAllConditions ? "is-invalid" : ""}`}
              type="checkbox"
              value=""
              id="accept"
              ref={inputAcceptAllConditions}
              htmlFor="accept"
            />
         

            <label className="form-check-label" htmlFor="accept">
              Accept all conditions
            </label>
            {errors.acceptAllConditions && (
              <div className="invalid-feedback">{errors.acceptAllConditions}</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
