
// nous pouvons ajouter dans un tableau

import { useState } from "react"

// faite attention pour l'utilisation de key aussi destructring
export default function FruitList ({list}) {

// states: recuperer les valeurs
const [fruit,setFruit] = useState('')
const [fruitList,setFruitList] = useState([])

// loop pour afficher
const displayFruits  = () => fruitList.map((fruit,fruitKey) =><ul key = {fruitKey}>{fruit}</ul> )


// 
const handleInput = () => {
  const fruitValue = document.querySelector('#fruit').value 
  setFruit(fruitValue)
}
const handleAddFruit = (e) => {
  e.preventDefault()
  setFruitList([...fruitList,fruit])
}

   return <>
    <h1>Fruits: </h1>
    <input type="text" id= "fruit" onChange={handleInput}/>
    <input type="submit" onClick={handleAddFruit} />
    <ul>{displayFruits()}</ul>
   </>
}