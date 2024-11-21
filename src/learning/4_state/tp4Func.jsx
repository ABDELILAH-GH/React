/*import { useState } from "react"

export default function Somme (){
   const [firstInput,setFirstInput] = useState ('')
   const [secondInput,setSecondInput] = useState ('')
   const [somme,setSomme] = useState ('0')
   const handleFirstInput =() =>{
   const inputValue1 = document.querySelector('#input1').value
   setFirstInput(inputValue1)
   }
   const handleSecondInput = () => {
      const inputValue2 = document.querySelector('#input2').value
      setSecondInput(inputValue2)
   }
   const handleSomme =( ) =>{
   const somme = parseFloat(firstInput) + parseFloat(secondInput)
   setSomme(somme)
   }
   return <>
   <input type="number" onChange={handleFirstInput} id="input1"/>
   <input type="number" onChange={handleSecondInput}id="input2"/>
   <input type="submit" onClick={handleSomme}/>
   <h1>{somme}</h1>
   </>
}*/

import { useState } from "react";

export default function Somme(){
   const [inputA,setInputA] = useState('')
   const [inputB,setInputB] = useState('')
   const [somme,setSomme] = useState('')
  const handleInputA = (e)=>{
   setInputA(e.target.value)
  }
  const handleInputB = (e)=>{
   setInputB(e.target.value)
  }
  const hanldeSomme = () => {
   setSomme(parseFloat(inputA)+parseFloat(inputB))
  }
  return <>
  <input type="number"  onChange={handleInputA} />
  <input type="number"  onChange={handleInputB}/>
  <input type="submit" onClick={hanldeSomme} />
  <h2>la somme est: {somme}</h2>
  </>
}
