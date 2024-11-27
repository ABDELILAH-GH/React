import React, { useState } from 'react'

export default function Radio() {
   const [inputA,setInputA] = useState()
   const [inputB,setInputB] = useState()
   const [operation,setOperation] = useState()
   const [result,setResult] = useState()
   const [error,setError] = useState()
   const handleInputA= (e) =>{
     setInputA(e.target.value)
   }
   const handleInputB= (e) =>{
     setInputB(e.target.value)
   }
   const handleOperation = (e) => {
    setOperation(e.target.value)
   }
   const handleResult= () =>{
      if(!inputA || !inputB || !operation){
         setError('Veuillez remplir tous les champs et choisir une opération !');
         return;
      }
      const a = parseFloat(inputA);
      const b = parseFloat(inputB);
      const operations = {
         somme : (a,b)=>a+b,
         multiplication:(a,b)=>a*b
      }
      setResult(operations[operation](a,b))
      
      // if(operation === "somme"){
      //    setResult(parseFloat(inputA) + parseFloat(inputB))
      // }else if (operation === "multiplication"){
      //    setResult(parseFloat(inputA) * parseFloat(inputB))

      // }
      setError('')
   } 
  return (
    <div className='container py-3'>
 {error && <div className="alert alert-danger" role="alert">{error}</div>}
    <div class="mb-3">
      <label class="form-label">Nombre 1</label>
      <input type="text" class="form-control"  onChange={handleInputA} />
    </div>
    <div class="mb-3">
      <label  class="form-label">Nombre 2</label>
      <input type="text" class="form-control" onChange={handleInputB}/>
    </div>
    
    <div class="form-check">
      <input class="form-check-input" type="radio"
       name="operation" id="somme" value = "somme" onChange={handleOperation}
       />
      <label class="form-check-label" htmlFor='somme'> Somme </label>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="radio" 
      name="operation" id="multiplication" value="multiplication" onChange={handleOperation}/>
      <label class="form-check-label" htmlFor="multiplication"> Multiplication</label>
    </div>
    <div className="form-submit">
      <input type="submit" className = "btn btn-primary" value="Calculer" onClick={handleResult}/>
    </div>
    <h3>Le resultat : {result} </h3>
    
    </div>
  )
}
