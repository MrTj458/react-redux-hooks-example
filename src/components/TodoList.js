import React from 'react'
import { useSelector, useActions } from 'react-redux'
import { toggleTodoAction, deleteTodoAction } from '../redux'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const toggleTodo = useActions((todoId) => toggleTodoAction(todoId))
  const deleteTodo = useActions((todoId) => deleteTodoAction(todoId))

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={toggleTodo.bind(null, todo.id)}
          />
          <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
          <span
            className="delete-button"
            onClick={deleteTodo.bind(null, todo.id)}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
