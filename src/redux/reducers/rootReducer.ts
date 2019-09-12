import { combineReducers } from 'redux'
import menuReducer from './menuReducer'
import cartReducer from './cartReducer'
import deliveryFormReducer from './deliveryFormReducer'

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer,
  deliveryForm: deliveryFormReducer
})

export default rootReducer
