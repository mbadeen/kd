import { ADD_TO_CART, CartActionTypes } from '../actions/cartActionTypes'
import { Cart, LineItem, SpecialRequest } from '../state'

const initialState: Cart = {
  lineItems: [],
  totalPrice: 0,
  totalQuantity: 0
}

// Calculate total price for a collection of SpecialRequests.
const calculateOptionsTotal = (accumulator: number, currentValue: SpecialRequest) =>
  accumulator + currentValue.unitPrice

// Calculate the total price for a single LineItem.
const calculateItemTotalPrice = (currentValue: LineItem) =>
  currentValue.quantity * (currentValue.unitPrice + currentValue.options.reduce(calculateOptionsTotal, 0))

// Calculate total price for a collection of LineItems.
const calculateTotalPrice = (accumulator: number, currentValue: LineItem) =>
  accumulator + calculateItemTotalPrice(currentValue)

// Calculate the total quantity for a collection of LineItems.
const calculateQuantity = (accumulator: number, currentValue: LineItem) => accumulator + currentValue.quantity

// const cartReducer = (state = initialState, action: CartActionTypes) => {
//   switch (action.type) {
//     case ADD_TO_CART: {
//       const lineItems = [...state.lineItems, action.payload]
//       return {
//         ...state,
//         lineItems,
//         totalPrice: lineItems.reduce(calculateTotalPrice, 0),
//         totalQuantity: lineItems.reduce(calculateQuantity, 0)
//       }
//     }
//     default:
//       return state
//   }
// }

const cartReducer = (state = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newOptions: SpecialRequest[] = action.payload.options.map(option => ({
        ...option,
        optionsTotalPrice: action.payload.quantity * option.unitPrice
      }))
      const lineItem: LineItem = {
        ...action.payload,
        basePriceTotal: action.payload.quantity * action.payload.unitPrice,
        lineItemTotal: calculateItemTotalPrice(action.payload),
        options: newOptions
      }
      const lineItems: LineItem[] = [...state.lineItems, lineItem]
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
