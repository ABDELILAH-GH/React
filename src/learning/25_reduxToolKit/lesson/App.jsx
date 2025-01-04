import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";
export default function AppTookit() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
