import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import lineItemReducer from './lineItemReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  lineItems: lineItemReducer
})

export default rootReducer
