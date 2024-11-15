import { useState } from "react"

// nous pouvons afficher un table de fruits 
// faite attention pour l'utilisation de key aussi destructring
export default function List () {
  const [fruit,setFruits] = useState('')
  const [fruitsList,setFruitsList] = useState([])

  // loop pour afficher
  const displayFruits  = () => fruitsList.map((fruit,fruitKey) =><li key = {fruitKey}>{fruit}</li> )

  const handleFruit = ()=> {
   const fruitValue = document.querySelector("#fruit").value
   setFruits(fruitValue)
  }
  const handleClick = (e) => {
     e.preventDefault()
     // nous forçons à crée un nouveau tableau
     setFruitsList([...fruitsList,fruit])
  }
  
   return <>
   
   <form>
   <input type="text" id="fruit" onChange={handleFruit}/>
   <input type="submit" value="Afficher" onClick={handleClick} />
   </form>
   <h3 className="h1">Friuts: </h3>
   <ul>{displayFruits()}</ul>
   </>
}