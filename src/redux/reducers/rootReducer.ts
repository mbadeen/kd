import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import cartReducer from './cartReducer'
import addressFormReducer from './addressFormReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  addressForm: addressFormReducer
})

export default rootReducer
