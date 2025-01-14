// store.js
import { createStore } from 'redux';
import calculReducer from './reducer';

const store = createStore(calculReducer);

export default store;
