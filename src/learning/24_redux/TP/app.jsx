import React from "react";
import { Provider } from "react-redux";
import Task from "./task";
import store from "./store";

export default function AppTodoList() {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  );
}
