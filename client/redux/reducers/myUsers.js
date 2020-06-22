import axios from 'axios'

const initialState = {
  users: [],
  selected: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'SET_SELECTED':
      if (action.status) {
        return { ...state, selected: [...state.selected, action.user] }
      }
      return {
        ...state,
        selected: [...state.selected.filter((el) => el.id !== action.user.id)]
      }
    case 'SELECT_ALL': {
      if (action.status) {
        return { ...state, selected: action.users }
      }
      return {
        ...state,
        selected: []
      }
    }
    default:
      return state
  }
}

export function getUsers() {
  return (dispatch) => {
    axios('/api/v1/users').then(({ data }) => dispatch({ type: 'GET_USERS', users: data }))
  }
}

export function selectUser(status, user) {
  return { type: 'SET_SELECTED', status, user }
}

export function selectedAll(status, users) {
  return { type: 'SELECT_ALL', status, users }
}
