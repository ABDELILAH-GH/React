import { useState } from "react";

export default function Revise2 () {
   const [message,setMessage] = useState(true)
   const handleClick = () => {
      setMessage((prevState) => !prevState)
   }

   return <>
   <h3>{message ? "Binevenue à inscrire" : "inscription effecutée"}</h3>

   <button onClick={handleClick}>
      {message ? "Inscrire" : "Merçi"}
   </button>
   </>
}