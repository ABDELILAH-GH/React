import React, { useEffect, useState } from "react";

export default function Add2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
       setCounter((prevState) => (prevState < 5 ? prevState + 1 : prevState));
    }, 1000);
    return () => {
      clearInterval(id);
    };

  }, []); // Le tableau vide garantit que l'effet est exécuté une seule fois.

  return (
    <div className="container w-75 mt-3">
      <h3>La valeur actuelle : {counter}</h3>
    </div>
  );
}
