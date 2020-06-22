import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import users from './myUsers'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    users
  })

export default createRootReducer
