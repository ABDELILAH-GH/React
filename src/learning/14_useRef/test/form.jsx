import React, { useRef, useState } from 'react'
import Table from './table'

export default   function EfmV2() {
   const inputId = useRef()
   const inputName = useRef()
   const inputNh = useRef()
   const inputRegional = useRef()
   const [formValues,setFormValues] = useState([])
   const handleFormChange = () => {
      const valuesOfFrom = {
         id : inputId.current.value,
         name : inputName.current.value,
         nh : inputNh.current.value,
         regional : inputRegional.current.checked ? "oui" : "non"
      }
      setFormValues(prevState=> [...prevState,valuesOfFrom])
   }
   const handleDelete = (id) =>  {
     const supprimer = formValues.filter(item=> item.id !== id)
     setFormValues(supprimer)
 }


    
  return (
    <div className='container-fluix w-75 my-3'>
      <h3>Les modules</h3>
      <hr />
         <div className="mb-3">
            <label for="" className="form-label">ID</label>
            <input   type="number"   className="form-control" ref={inputId}  id="id"  placeholder="Entrez l' ID"/>
         </div>
         <div className="mb-3">
            <label for="" className="form-label">Name</label>
            <input   type="text"   className="form-control" ref={inputName}    id="name"  placeholder="Entrez le nom du module"/>
         </div>
         <div className="mb-3">
            <label for="" className="form-label">NH</label>
            <input   type="number"   className="form-control" ref={inputNh}    id="nh"  placeholder="Entrez le nombre d'heures"/>
         </div>
         <div className="form-check">
            <input className="form-check-input" type="checkbox" id="regional" ref={inputRegional}/>
            <label className="form-check-label" htmlFor="regional"> Régional</label>
         </div>
         <button   type="submit " onClick={handleFormChange}  className="btn btn-primary mt-2">Ajouter</button>
     <hr />
         <h3>Listes des modules</h3>
         <hr />

         <div className="table-responsive">
            <table className="table">
                 <thead class="table-success">
                  <tr>
                     <th scope="col">ID</th>
                     <th scope="col">Name</th>
                     <th scope="col">NH</th>
                     <th scope="col">Régional</th>
                     <th scope="col"></th>
                  </tr>
               </thead>
               <tbody>
                  <Table handleDelete={handleDelete} formValues={formValues}/>
               </tbody>
            </table>
         </div>  
    </div>
  )
}
