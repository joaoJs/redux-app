const INITIAL_STATE = [{ id: 1, task: 'fazer café' }, { id: 2, task: 'nadar' }]

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), task: action.payload.task }]
    default:
      return state
  }
}
