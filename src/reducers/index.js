import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

/* reducer has a signature of (state, action) => state.
 *
 * Reducers must be pure, meaning
 *
 * - they cannot have side effects
 * - they must return the same value for the same input, under any condition
 *
 * Mutation is a side effect too, so reducers cannot mutate state or action.
 * Instead, they must return a new state.
 */

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

/* {
 *   todos,
 *   visibilityFilter
 * }
 *
 * is an ES6 syntax, equivalent of
 *
 * {
 *   todos: todos,
 *   visibilityFilter: visibilityFilter
 * }
 *
 * combineReducers further converts that to the following:
 *
 * (state, action) => {
 *   return {
 *     todos: todos(state.todos, action),
 *     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
 *   }
 * }
 */

export default todoApp
