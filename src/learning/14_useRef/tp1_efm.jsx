import React, { useRef, useState } from 'react'

export default function Efm() {
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
      setFormValues(prevState => [...prevState,valuesOfFrom])
   }
   console.log(formValues)

   const handleSupprimer = (id) => {
      const updateList  =   formValues.filter((item) => item.id !== id)
      setFormValues(updateList)
   }

   const displayListModules = () => {
      return formValues.map((item, index) => (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.nh}</td>
          <td>{item.regional}</td>
          <td><button type="submit"   class="btn btn-danger" onClick={()=>handleSupprimer(item.id)} >supprimer</button>
          </td>
        </tr>
      ));
    }
    
  return (
    <div className='container   mt-4'>
      <h3>Les modules</h3>
      <hr />
         <div className="mb-3">
            <label for="" className="form-label">ID</label>
            <input   type="number"   className="form-control" ref={inputId}  id="id"  placeholder="Entrez l' ID"/>
         </div>
         <div className="mb-3">
            <label for="" className="form-label">Name</label>
            <input   type="text"   className="form-control" ref={inputName}    id="name"  placeholder="Entrez le nom du item"/>
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
                  {displayListModules()}
               </tbody>
            </table>
         </div>  
    </div>
  )
}
