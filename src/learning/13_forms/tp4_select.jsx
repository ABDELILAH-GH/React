import React, { useEffect, useRef, useState } from 'react'

export default function Select() {
const [formValue,setFormValue] = useState({city:'',file:null})

 const inputCity = useRef()
 const inputFile = useRef()
 const handleChange = () => {
   const selectedFile = inputFile.current.files[0];
   const valuesOfForm = {
     city: inputCity.current.value,
     file: selectedFile,
   }

   setFormValue(valuesOfForm)
 }

 // pour ajouter un valeur par default
 useEffect (()=>{
   inputCity.current.value = '4'
 })
   
   const tab = [{"id":"1","nom":"Fez"},{"id":"2","nom":"Rabat"},{"id":"3","nom":"Tanger"},{"id":"4","nom":"El jadida"}]
  return (
    <div className='container mt-4'>
      {/* VoxChoix : {tab.find((item)=> (item.id) === formValue).nom} */}

{/* pour eviter l'error quand tu peut acceder au proprieter nom car en [{},{}]  en utilise .?*/}
     <h3> VoxChoix : {tab.find((item) => item.id === (formValue.city))?.nom || "Aucun "}</h3>
    <div class="mb-3 mt-4">
      <select   class="form-select form-select-lg" id="city" ref={inputCity}>
      {   
            tab.map((item)=> (
               <option
               value={item.id}
               key={item.id}
               >
                  {item.nom}
               </option>
            ))
   }
      </select>
    </div>
    <h3>Fichier Choisis : {formValue.file ? formValue.file.name : "Aucun fichier"}</h3>
    {formValue.file && (
        <img
          src={URL.createObjectURL(formValue.file)} 
          alt=""
          className="img-fluid"
          style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }} 
        />
      )}

    <div class="mb-3 mt-4">
      <input
         type="file"
         class="form-control"
         name=""
         id="file"
         ref={inputFile}
      />
    </div>
    
   <button   type="submit" onClick={handleChange}  class="btn btn-primary">   ok</button>

    </div>
    
  )
}
