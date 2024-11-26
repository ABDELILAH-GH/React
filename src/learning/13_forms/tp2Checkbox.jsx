import { useState } from "react";

export default function Loisir() {
  const [afficher, setAfficher] = useState(""); 
  const [choix, setChoix] = useState([]); 
  const [total, setTotal] = useState(0); 
  const handleChoix = (event) => {
    const { value, checked, dataset } = event.target; 
    const price = Number(dataset.price); 

    if (checked) {
      setChoix((prevState) => [...prevState, value]);
      setTotal((prevState) => prevState + price); 
    } else {
      setChoix((prevState) => prevState.filter((choix) => choix !== value));
      setTotal((prevState) => prevState - price); 
    }
  };

  const handleAffiche = () => {
    setAfficher(choix.join(", ")); 
    
  };

  const listOfHobies = { banana: 10, apple: 15, lemon: 20, orange: 12 };
  const hobiesArray = Object.entries(listOfHobies);

  return (
    <div className="container">
      <h2>choisir ce que tu veux</h2>
      {hobiesArray.map(([key, value]) => (
        <div className="form-check" key={key}>
          <input
            className="form-check-input"
            type="checkbox"
            value={`${key} (${value}€)`}
            id={key}
            data-price={value} 
            onChange={handleChoix} 
          />
          <label className="form-check-label" htmlFor={key}>
            {key} - {value}€
          </label>
        </div>
      ))}
      <button type="button" className="btn btn-primary mt-3" onClick={handleAffiche}>
        Submit
      </button>

      <h3 className="mt-3">Vos choix :{afficher}</h3>
      <h3 className="mt-3">Total :{total}€</h3>
    </div>
  );
}
