
// HOOKS
// en le deuxieme type de hooks c'est "useRef" en utilise ce genre pour 
// 1-->recuperation de donne par une form
// 2 --> recuperation dom
import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
   const inputNameRef= useRef()
   const inputDateRef= useRef()
   const inputCityRef = useRef()
   const inputCountryRef= useRef()
   const inputCheckedRef= useRef()
   const [formValues,setFormValue] = useState()
   const handleSubmit = () => {
      const inputsValues  = {
         name : inputNameRef.current.value ,
         Date : inputDateRef.current.value,
         city:inputCityRef.current.value,
         country:inputCountryRef.current.value,
         acceptConditions : inputCheckedRef.current.checked
      }
      setFormValue(inputsValues)
      
   }
   // pour ajouter une valeur par defaut a les inputs
   // l'utilisation de componentDidMounth et la meilleur methode
   useEffect (() => {
       inputNameRef.current.value = 'abdelilah'
       // new Date().toISOString().substring(0,10) pour recuperer la date sous forme de YY-mm-dd
       inputDateRef.current.value = new Date().toISOString().substring(0,10)
       // focus() a permet de faire un focus sur un champ
       inputCityRef.current.focus()
       inputCountryRef.current.value = 'MA'
   },[])



   
  return (
    <div className='container'>
         <div className={"container my-4"}>     
       <h3>Form</h3>
       {/* ce ligne pour afficher les donnes sous forme d'un object */}
       {JSON.stringify(formValues)}

       {/* afficher la date  */}
       {(new Date()).toLocaleString}
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          // important
          ref={inputNameRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          id="Date"
          ref={inputDateRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">City</label>
        <input
          type="text"
          className="form-control"
          id="city"
          ref={inputCityRef}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Country</label>
        <select className="form-control" id="country" ref={inputCountryRef}>
          <option value="MA">Maroc</option>
          <option value="DZ">Algérie</option>
          <option value="TN">Tunisie</option>
          <option value="OTHER">Other</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="acceptConditions" className="form-label">
          Checked
        </label>
        <input
          id="acceptConditions"
          className="form-check-input ms-3"
          type="checkbox"
          ref={inputCheckedRef}
        />
      </div>
      <div className="mb-3 ">
        <input
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleSubmit}
        />
      </div>
    </div>
    </div>
  )
}
