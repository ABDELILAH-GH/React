import { useState } from "react";

export default function Forms() {
  const [formValue, setFormValue] = useState({
    name:'',
    age:'',
    city:'',
    contry:'MA',
    acceptConditions:false
  });

  // cette fonction permet de recuperer tous les donnes par un formulaire pour n'importe quelle 
  // type de d'input 
  const handleChange = (e) => {
    const currentTarget = e.currentTarget;
    const id = currentTarget.id;
    let value = currentTarget.value;
    // si le type et de input checkbox tu returne checked
  if(currentTarget.type === "checkbox"){
    value = currentTarget.checked
  }
    setFormValue((prevState) => {
      return {...prevState,...{[id]:value}}
    })
  };
  return (
    
    <div className={"container my-4"}>
      {JSON.stringify(formValue)}
      <h3>Form</h3>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Age</label>
        <input
          type="number"
          class="form-control"
          id="age"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">City</label>
        <input
          type="text"
          class="form-control"
          id="city"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label class="form-label">Country</label>
        <select className="form-control" id="country" onChange={handleChange}>
          <option value="MA">Maroc</option>
          <option value="DZ">Algérie</option>
          <option value="TN">Tunisie</option>
          <option value="OTHER">Other</option>
        </select>
      </div>
      <div class="mb-3">
        <label htmlFor="acceptConditions" class="form-label">
          Checked
        </label>
        <input
          id="acceptConditions"
          class="form-check-input ms-3"
          type="checkbox"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3 ">
        <input
          type="submit"
          class="btn btn-primary mb-3"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
