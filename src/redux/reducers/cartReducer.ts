import { ADD_TO_CART, CartActionTypes } from '../actions/cartActionTypes'
import { Cart } from '../state'

const initialState: Cart = {
  lineItems: [],
  totalPrice: 0,
  totalQuantity: 0
}

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const lineItems = [...state.lineItems, action.payload]
      return {
        ...state,
        lineItems,
        totalPrice: lineItems.reduce(
          (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
          0
        ),
        totalQuantity: lineItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)
      }
    }
    default:
      return state
  }
}

export default cartReducer
