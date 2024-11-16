import { useState } from "react";

export default function Field() {
   const [list,setList] = useState([])
   const handleClick =(value) => {
      
      if(!list.includes(value)){
         setList([...list,value])
      }
        
      
     
   }
   const handleDelelte = (value) => {
   setList([...list.filter((item)=>item !== value)])
   }
   const arrayValues = ["html","css","js","php","react","laravel","python","algorithme"]
   return <>
  
   <h3 className="h1">Choisir Filiere: </h3>
   {
      arrayValues.map((value) => (
         <button
         key = {value}
         onClick={()=>handleClick(value)}
         >
         {value}
         </button>
      ))
   }
   <h4>Vos Choix :</h4>
   <ul>
      {
         list.map((item,index)=>(
            <li key = {index}>
               {item}
               <button className="delete"
               onClick={()=>handleDelelte(item)}
               >
                  X
               </button>

            </li>
         ))
      }
   </ul>
   
   </>
}