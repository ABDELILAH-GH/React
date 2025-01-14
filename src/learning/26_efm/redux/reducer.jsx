// reducer.js
import { SET_VAL1, SET_VAL2, CALCULER_SOMME } from './actions';

const initialState = {
  valeur1: 0,
  valeur2: 0,
  somme: 0,
};

const calculReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VAL1:
      return {
        ...state,
        valeur1: action.payload,
      };
    case SET_VAL2:
      return {
        ...state,
        valeur2: action.payload,
      };
    case CALCULER_SOMME:
      return {
        ...state,
        somme: state.valeur1 + state.valeur2,
      };
    default:
      return state;
  }
};

export default calculReducer;
