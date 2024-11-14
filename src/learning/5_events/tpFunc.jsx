import {useState} from "react";
export default function Counter2() {
     const [counter,setCounter] = useState(0)

     
     const handlePlus = () =>{
          setCounter((preventState)=>preventState+1)
     }
     const handleMoins = () =>{
          setCounter((preventState)=>preventState-1)
     }
     const handleRest = () =>{
        setCounter(0)
     }


     return<>
      <input type="submit" className="btn1" value = "Plus +" onClick={handlePlus}/>
      <input type="submit" className="btn1" value ="moins -" onClick={handleMoins}/>
      <input type="submit" className="btn1" value = "rest à 0" onClick={handleRest}/>
      <h3>Counter: {counter}</h3>
     </>
   

}
