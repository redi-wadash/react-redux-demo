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

const nextId = (state) => {
  const existingIds = state.map(t => t.id)
  if (existingIds.length === 0) {
    return 0
  } else {
    return Math.max(...existingIds) + 1
  }
}

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
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
