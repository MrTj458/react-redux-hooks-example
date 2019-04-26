import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
