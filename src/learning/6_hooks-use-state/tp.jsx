import { useState } from "react"

export default function Compteur ({intialValue,step}) {

   // les Hooks
   // en a plusieurs hooks par exemple useState
   // en a aussi use effect
   const [count,setCount] = useState(intialValue)
   // ce composants permet d'incrementer
  const handleClick = () => {
   setCount(prevState => prevState + step)
  }
   // ce composants permet de rester l'incrementation a 0
   const handleReset = () => { setCount(0)}
    return <>
    <button onClick={handleClick}>incrementer</button>
    <button onClick={handleReset}>reset</button>
    <h1>il y'a {count} seconds</h1>
    
    </>
}
// use this
// <Compteur intialValue={2} step={3}/>