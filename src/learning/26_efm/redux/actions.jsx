// actions.js
export const SET_VAL1 = 'SET_VAL1';
export const SET_VAL2 = 'SET_VAL2';
export const CALCULER_SOMME = 'CALCULER_SOMME';

export const setVal1 = (val1) => ({
  type: SET_VAL1,
  payload: val1,
});

export const setVal2 = (val2) => ({
  type: SET_VAL2,
  payload: val2,
});

export const calculerSomme = () => ({
  type: CALCULER_SOMME,
});
