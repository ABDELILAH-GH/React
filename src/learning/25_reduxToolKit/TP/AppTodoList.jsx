import React from 'react';
import { Provider } from 'react-redux';
import Task from './Task';
import store from './store';

export default function AppTodoListToolkit() {
  return (
    <Provider store={store}>
      <Task />
    </Provider>
  );
}
