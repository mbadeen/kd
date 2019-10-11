import ADD_TO_CART, { CartActionTypes } from '../actions/cartActionTypes'
import { LineItem } from '../state'

const initialState: LineItem[] = []

const cartReducer = (state = initialState, action: CartActionTypes): LineItem[] => {
  switch (action.type) {
    // case ADD_TO_CART:
    //   return [...state, action.payload]

    // case ADD_TO_CART: {
    //   const duplicateLineItem = state.find(
    //     lineItem => lineItem.id === action.payload.id && isEqual(lineItem.options, action.payload.options)
    //   )

    //   if (duplicateLineItem) {
    //     return state.map(lineItem =>
    //       isEqual(lineItem, duplicateLineItem)
    //         ? { ...lineItem, quantity: lineItem.quantity + action.payload.quantity }
    //         : lineItem
    //     )
    //   }
    //   return [...state, action.payload]
    // }
    case ADD_TO_CART: {
      // const duplicateLineItem = state.find(lineItem => lineItem.id === action.payload.id)

      if (state.find((lineItem: LineItem) => lineItem.id === action.payload.id)) {
        return state.map((lineItem: LineItem) =>
          lineItem.id === action.payload.id
            ? { ...lineItem, quantity: lineItem.quantity + action.payload.quantity }
            : lineItem
        )
      }
      return [...state, action.payload]
    }

    default:
      return state
  }
}

export default cartReducer
