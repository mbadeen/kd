import { ADD_TO_CART, CartActionTypes } from '../actions/cartActionTypes'
import { Cart, LineItem, SpecialRequest } from '../state'

const initialState: Cart = {
  lineItems: [],
  totalPrice: 0,
  totalQuantity: 0
}

// Calculate total price for a collection of SpecialRequests.
const calculateOptionsTotal = (accumulator: number, currentValue: SpecialRequest) => accumulator + currentValue.price

// Calculate total price for a collection of LineItems.
const calculateTotalPrice = (accumulator: number, currentValue: LineItem) =>
  accumulator + currentValue.quantity * (currentValue.price + currentValue.options.reduce(calculateOptionsTotal, 0))

// Calculate the total quantity for a collection of LineItems.
const calculateQuantity = (accumulator: number, currentValue: LineItem) => accumulator + currentValue.quantity

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const lineItems = [...state.lineItems, action.payload]
      return {
        ...state,
        lineItems,
        totalPrice: lineItems.reduce(calculateTotalPrice, 0),
        totalQuantity: lineItems.reduce(calculateQuantity, 0)
      }
    }
    default:
      return state
  }
}

export default cartReducer
