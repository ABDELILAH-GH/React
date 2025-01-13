import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Task from './task'

export default function Rww() {
  return (
    <Provider store={store}>
      <Task/>
    </Provider>
  )
}
