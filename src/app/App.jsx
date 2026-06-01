import React from 'react'
import { ContextProvider } from '../features/todos/context/TodoContext'
import TodoForm from '../features/todos/components/TodoForm'
import ShowTodos from '../features/todos/components/ShowTodos'
import Navbar from '../shared/Navbar'
import StarRating from '../features/starRating/components/StarRating'

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <TodoForm />
      <ShowTodos />
    </ContextProvider>
  )
}

export default App
