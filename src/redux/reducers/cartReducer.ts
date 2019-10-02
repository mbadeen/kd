import ADD_TO_CART, { CartActionTypes } from '../actions/cartActionTypes'
import { LineItem } from '../state'

const initialState: LineItem[] = []

const cartReducer = (state = initialState, action: CartActionTypes): LineItem[] => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    default:
      return state
  }
}

export default cartReducer
