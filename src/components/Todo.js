import React from 'react'
import { useActions } from 'react-redux'
import { toggleTodoAction, deleteTodoAction } from '../redux'

const Todo = ({ todo: { id, name, complete } }) => {
  const toggleTodo = useActions(() => toggleTodoAction(id))
  const deleteTodo = useActions(() => deleteTodoAction(id))

  return (
    <li key={id}>
      <input type="checkbox" checked={complete} onChange={toggleTodo} />
      <span className={complete ? 'complete' : null}>{name}</span>
      <span className="delete-button" onClick={deleteTodo}>
        X
      </span>
    </li>
  )
}

export default Todo
