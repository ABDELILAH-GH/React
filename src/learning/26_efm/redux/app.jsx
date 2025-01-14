import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import CInput from "./cinput";
import COutput from "./coutput";

const Efm2023 = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Gestion des Stagiaires</h1>
        <CInput />
        <COutput />
      </div>
    </Provider>
  );
};

export default Efm2023;
