import React, { useRef, useState } from 'react';

export default function Controle() {
  const inputName = useRef();
  const inputId = useRef();
  const inputAge = useRef();
  const inputNote = useRef();
  const inputEmail = useRef();

  const [data, setData] = useState([
    { id: 1, name: "hassan", age: "gh1", note: 19, email: "exemple1@gmail.com" },
    { id: 2, name: "houssam", age: "gh2", note: 18, email: "exemple2@gmail.com" },
    { id: 3, name: "ali", age: "gh3", note: 17, email: "exemple3@gmail.com" },
  ]);
  const [errors, setErrors] = useState({
   id:"",
   name:"",
   age:"",
   note:"",
   email:""
  });

  const handleValidate = () => {
    // Vider les anciennes erreurs
    setErrors({});

    const formValue = {
      id: inputId.current.value,
      name: inputName.current.value,
      age: inputAge.current.value,
      note: inputNote.current.value,
      email: inputEmail.current.value,
    };

    let isFormValid = true;

    // Validation
    if (!formValue.id || formValue.id.trim() === "") {
      setErrors((prevState) => ({ ...prevState, id: "ID is required!" }));
      isFormValid = false;
    }

    if (!formValue.name || formValue.name.trim() === "") {
      setErrors((prevState) => ({ ...prevState, name: "Name is required!" }));
      isFormValid = false;
    }
    else if(!formValue.name.match(/^[a-zA-Z]{3,}$/)){
      setErrors((prevState) => ({...prevState,name:"Name must be greater then two letters and evoid use numbers!"}))
      isFormValid = false
    }

    if (!formValue.age || formValue.age.trim() === "") {
      setErrors((prevState) => ({ ...prevState, age: "Age is required!" }));
      isFormValid = false;
    }
    else if (formValue.age < 18 || formValue.age > 120) {
      setErrors((prevState) => ({ ...prevState, age: "Age must be between 18 and 120!" }));
      isFormValid = false;
    }

    if (!formValue.note || formValue.note.trim() === "") {
      setErrors((prevState) => ({ ...prevState, note: "Note is required!" }));
      isFormValid = false;
    }
    else if (formValue.note < 0 || formValue.note > 20) {
      setErrors((prevState) => ({ ...prevState, note: "Note must be between 0 and 20!" }));
      isFormValid = false;
    }

    if (!formValue.email || formValue.email.trim() === "") {
      setErrors((prevState) => ({ ...prevState, email: "Email is required!" }));
      isFormValid = false;
    }
    else if(!formValue.email.match(/^[a-zA-Z-_.]+@[a-zA-Z]+\.[a-z]{2,}$/)){
      setErrors((prevState) => ({...prevState,email:"respect email format exemple@domai.com"}))
    }

    // Ajouter l'étudiant si le formulaire est valide
    if (isFormValid) {
      setData((prevState) => [...prevState, formValue]);
    }
  };

  const handleSupprimerEtudiant = (id) => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleAjouterEtudaint = () => {
    return data.map((index, key) => (
      <tr key={key}>
        <td>{index.id}</td>
        <td>{index.name}</td>
        <td>{index.age}</td>
        <td>{index.note}</td>
        <td>{index.email}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleSupprimerEtudiant(index.id)}
          >
            Supprimer
          </button>
          <button
            type="button"
            className="btn btn-success ms-3"
            onClick={() => handleSupprimerEtudiant(index.id)}
          >
            Modifier
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container w-75 mt-3">
      <h3 className="text-success d-flex justify-content-center">Controle</h3>
      <div className="mb-3">
        <label htmlFor="" className="form-label">ID</label>
        <input
          type="number"
          name="id"
          className={`form-control ${errors.id ? "is-invalid" : inputId.current?.value ? "is-valid" : ""}`}
          ref={inputId}
        />
        {errors.id && <div className="invalid-feedback">{errors.id}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Name</label>
        <input
          name="name"
          type="text"
          className={`form-control ${errors.name ? "is-invalid" : inputName.current?.value ? "is-valid" : ""}`}
          ref={inputName}
        />
        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Age</label>
        <input
          name="age"
          type="number"
          className={`form-control ${errors.age ? "is-invalid" : inputAge.current?.value ? "is-valid" : ""}`}
          ref={inputAge}
        />
        {errors.age && <div className="invalid-feedback">{errors.age}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Note</label>
        <input
          name="note"
          type="number"
          className={`form-control ${errors.note ? "is-invalid" : inputNote.current?.value ? "is-valid" : ""}`}
          ref={inputNote}
          max="20"
          min="0"
        />
        {errors.note && <div className="invalid-feedback">{errors.note}</div>}
      </div>
      <div className="mb-3">
        <label htmlFor="" className="form-label">Email</label>
        <input
          name="email"
          type="text"
          className={`form-control ${errors.email ? "is-invalid" : inputEmail.current?.value ? "is-valid" : ""}`}
          ref={inputEmail}
        />
        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>
      <div className="d-flex justify-content-center py-3">
        <button
          type="button"
          className="btn btn-info w-50"
          onClick={handleValidate}
        >
          Ajouter
        </button>
      </div>

      <hr />
      <h3 className="text-success d-flex justify-content-center py-4">Listes des etudiants</h3>
      <div className="table-responsive">
        <table className="table">
          <thead className="table table-warning">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Note</th>
              <th scope="col">Email</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>{handleAjouterEtudaint()}</tbody>
        </table>
      </div>
    </div>
  );
}
