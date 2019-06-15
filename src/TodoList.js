import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const TodoList = props => (
  <ul>
    {props.state.map(todo => (
      <li key={todo.id}>{todo.task}</li>
    ))}
  </ul>
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

export default connect(mapStateToProps)(TodoList)
