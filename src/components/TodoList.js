import React, {PropTypes} from 'react'
import Todo from './Todo'

/* Non-container React components are called presentational components.
 *
 * They must focus on presentation and know nothing about Redux.
 * */
const TodoList = ({todos, onTodoClick}) => (
    <ul>
      {todos.map(todo =>
          <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
          />
      )}
    </ul>
)

export default TodoList
