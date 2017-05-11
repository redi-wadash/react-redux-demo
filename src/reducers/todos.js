const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat({
        id: nextId(state),
        text: action.text,
        completed: false
      })
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}
/*
 * Reducer must be pure, so it must derive the next ID from the input (either current state or action).
 *
 * It cannot generate UUID here, for example, because then its output differs even for the same input.
 */
const nextId = (state) => {
  const existingIds = state.map(t => t.id)
  if (existingIds.length === 0) {
    return 0
  } else {
    /* (...[0, 1, 2]) is equivalent of (0, 1, 2) */
    return Math.max(...existingIds) + 1
  }
}

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        /* It cannot mutate the state. It must return a new state. */
        return Object.assign({}, state, {
          completed: !state.completed
        })
      } else {
        return state
      }
    default:
      return state
  }
}

export default todos
