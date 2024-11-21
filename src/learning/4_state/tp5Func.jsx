import { useState } from "react";

export default function Temperateur () {
  const [temp,setTemp] = useState('')
  const [pluie,setPluie] = useState(false)
  const [mess,setMess] = useState('')
  const handleTemp = (e) => {
    setTemp(e.target.value)
  }
  const handlePluie = (e) => {
    setPluie(e.target.checked)

  }
  const handleMess = () => {
    if (pluie){
      setMess(`Temperateur : ${temp} C avec pluie `)
    }else{
      setMess(`Temperateur : ${temp} C`)

    }
  }

  return<>
  <input type="text" onChange={handleTemp}/>
  <input type="checkbox" onChange={handlePluie} />
  <input type="submit" value="OK" onClick={handleMess} />
<h3>{mess}</h3>
  </>
}