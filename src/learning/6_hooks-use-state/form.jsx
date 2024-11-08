import { useState } from "react"

// nous pouvons recuperer les valuers de formulaire et en afficherons
export default function Form () {
  const [name,setName] = useState()
  const [age,setAge] = useState()

  const handleNameInputchange = () =>{
   const name = document.querySelector('#name').value 
   setName(name)
  }
  const handleAgeinputChange = () => {
   const age= document.querySelector('#age').value
   setAge(age)
  }

  const handleSubmit = (e) =>{
   e.preventDefault() //pour ne pas envoyer les values quand tu click sur submit
   console.log({name,age})
  }

   return <>
   Prenom: <input type="text" id ='name' placeholder="entez votre prenom" onChange={handleNameInputchange}/><br />
   Age: <input type="number" id="age" placeholder="entrez votre age" onChange={handleAgeinputChange}/><br />
   <input type="submit" value = "Envoyer" onClick={handleSubmit}/>
   </>
}