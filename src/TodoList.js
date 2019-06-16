import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const TodoList = ({ state, addTodo }) => (
  <Fragment>
    <ul>
      {state.map(todo => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
    <button onClick={() => addTodo('Comer')}>Add</button>
  </Fragment>
)

TodoList.propTypes = {
  state: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      task: PropTypes.string
    })
  )
}.isRequired

const mapStateToProps = state => ({
  state: state.todos
})

const mapDispatchToProps = dispatch => ({
  addTodo: task => dispatch({ type: 'ADD_TODO', payload: { task } })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
