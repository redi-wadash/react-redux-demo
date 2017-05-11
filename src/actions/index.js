/*
 * Actions must be a plain object with "type" field.
 *
 * {
 *   type: "ADD_TODO",
 *   text: "First thing to do"
 * }
 *
 * Functions creating actions are called action creators.
 */
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}
/*
 * {
 *   type: 'ADD_TODO',
 *   text
 * }
 *
 * is an ES6 syntax and is equivalent of the following:
 *
 * {
 *   type: 'ADD_TODO',
 *   text: text
 * }
 */
export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
