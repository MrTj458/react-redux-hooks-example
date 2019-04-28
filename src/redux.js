import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
  todos: todoReducer,
})

export const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function todoReducer(state = [], { type, payload }) {
  switch (type) {
    case 'ADD_TODO':
      return [...state, payload]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === payload ? { ...todo, complete: !todo.complete } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== payload)
    default:
      return state
  }
}

export const addTodoAction = todo => {
  return {
    type: 'ADD_TODO',
    payload: todo,
  }
}

export const toggleTodoAction = todoId => {
  return {
    type: 'TOGGLE_TODO',
    payload: todoId,
  }
}

export const deleteTodoAction = todoId => {
  return {
    type: 'DELETE_TODO',
    payload: todoId,
  }
}
