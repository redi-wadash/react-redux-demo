/* Actions must be a plain object with "type" field.
 *
 * These functions creating actions are called action creators.
 */
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  }
}

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
