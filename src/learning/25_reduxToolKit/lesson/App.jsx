import React from 'react'
import { Provider } from 'react-redux'
import Counter from './Counter'
import store from './store'

export default function ReduxT() {
  return (
    <Provider store={store}>
        <Counter/>
    </Provider>
  )
}
