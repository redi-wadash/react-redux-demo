import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}
/*
 * When using Redux with React, it's typical to create a container components.
 *
 * Container components extract props out of current Redux state.
 *
 * connect function has a signature of (mapStateToProps, mapDispatchToProps) => component => component.
 *
 * It separates state mapper and dispatch mapper so that Redux can optimize the operation internally.
 */
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
/*
 * It is equivalent of the following:
 *
 * const containerComponentFactory = connect(mapStateToProps, mapDispatchToProps)
 * const VisibleTodoList = containerComponentFactory(TodoList)
 */
export default VisibleTodoList
