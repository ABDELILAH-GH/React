// SommeCalculatrice.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVal1, setVal2, calculerSomme } from './actions';

const SommeCalculatrice = () => {
  const dispatch = useDispatch();
  const { valeur1, valeur2, somme } = useSelector((state) => state);

  const handleValeur1Change = (event) => {
    dispatch(setVal1(parseFloat(event.target.value)));
  };

  const handleValeur2Change = (event) => {
    dispatch(setVal2(parseFloat(event.target.value)));
  };

  const handleCalculerSomme = () => {
    dispatch(calculerSomme());
  };

  return (
    <div>
      <h3>Calculatrice de Somme avec Redux</h3>
      <div>
        <label htmlFor="valeur1">Valeur 1:</label>
        <input
          type="number"
          id="valeur1"
          value={valeur1}
          onChange={handleValeur1Change}
        />
      </div>
      <div>
        <label htmlFor="valeur2">Valeur 2:</label>
        <input
          type="number"
          id="valeur2"
          value={valeur2}
          onChange={handleValeur2Change}
        />
      </div>
      <button onClick={handleCalculerSomme}>Calculer la Somme</button>

      <div>
        <h4>La somme des valeurs est: {somme}</h4>
      </div>
    </div>
  );
};

export default SommeCalculatrice;
