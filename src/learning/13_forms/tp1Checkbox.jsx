import React, { useState } from 'react'

export default function Checkbox() {
   const [pluit,setPluit] = useState(false)
   const [temp,setTemp] = useState('')
   const [result,setResult] = useState('')
   const handleTemp = (e) => {
     setTemp(e.target.value)
     
   }
   const handlePluit = (e) => {
      setPluit(e.target.checked)
   }
   const handleResult = () => {

    if(pluit){
      setResult(temp+' C avec pluit')

    }else{
      setResult(temp+'C')
    }
   }
   
  return (
    <div className='container'>
      <h3>Temperature:</h3>
      <div class="mb-3">
         <label class="form-label">Temperature</label>
         <input   type="text"   class="form-control"   onChange={handleTemp}/>
      </div>      
     <div class="form-check">
         <input class="form-check-input" type="checkbox" value="" id="pluit" onChange={handlePluit}/>
         <label class="form-check-label" htmlFor="pluit"> pluit</label>
      </div>
      <button type="submit" class="btn btn-primary" onClick={handleResult}> Afficher </button>
      <h3>Temprerature : {result}</h3>
    </div>
  )
}
