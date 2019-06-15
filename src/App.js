import './App.css'
import { Provider } from 'react-redux'
import store from './store/index'
import TodoList from './TodoList'
import React from 'react'

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}

export default App
