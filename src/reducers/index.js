import {combineReducers} from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
/*
 * Reducer has a signature of (state, action) => state.
 *
 * Reducer must be pure, meaning
 *
 * - it cannot have side effects
 * - it must return the same value for the same input under any condition
 *
 * Mutation is side effect too, so reducer cannot mutate state. Instead, it must return a new state.
 *
 * For this application, our state looks like the following:
 *
 * {
 *   todos: [
 *     {
 *       id: 0,
 *       text: 'First thing to do',
 *       completed: true
 *     }, {
 *       id: 1,
 *       text: 'Second thing to do',
 *       completed: false
 *     }
 *   ],
 *   visibilityFilter: 'SHOW_ALL'
 * }
 *
 * State should be minimum to leave less room for error.
 *
 * For example, note that it doesn't have separate list for visible TODO list
 * because the list can be derived from the master TODO list and the visibility filter.
 */
const todoApp = combineReducers({
  todos,
  visibilityFilter
})
/*
 * combineReducers converts
 *
 * {
 *   todos: todos,
 *   visibilityFilter: visibilityFilter
 * }
 *
 * to the following:
 *
 * (state, action) => {
 *   return {
 *     todos: todos(state.todos, action),
 *     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
 *   }
 * }
 */
export default todoApp
