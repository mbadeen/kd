import _ from 'lodash'
import ADD_TO_CART, { CartActionTypes } from '../actions/cartActionTypes'
import { Cart, LineItem, SpecialRequest } from '../state'

const initialState: Cart = {
  lineItems: [],
  totalPrice: 0,
  totalQuantity: 0
}

// Calculate total price for a collection of SpecialRequests.
const calculateOptionsTotal = (accumulator: number, currentValue: SpecialRequest): number =>
  accumulator + (currentValue.unitPrice || 0)

// Calculate the total price for a single LineItem.
const calculateItemTotalPrice = (currentValue: LineItem): number =>
  currentValue.quantity * (currentValue.unitPrice + currentValue.options.reduce(calculateOptionsTotal, 0))

// Calculate total price for a collection of LineItems.
const calculateTotalPrice = (accumulator: number, currentValue: LineItem): number =>
  accumulator + calculateItemTotalPrice(currentValue)

// Calculate the total quantity for a collection of LineItems.
const calculateQuantity = (accumulator: number, currentValue: LineItem): number => accumulator + currentValue.quantity

const addToCartTotals = (state = initialState, action: CartActionTypes): Cart => {
  const newOptions: SpecialRequest[] = action.payload.options.map(
    (option: SpecialRequest): SpecialRequest => ({
      ...option,
      optionsTotalPrice: action.payload.quantity * (option.unitPrice || 0)
    })
  )
  const lineItem: LineItem = {
    ...action.payload,
    basePriceTotal: action.payload.quantity * action.payload.unitPrice,
    lineItemTotal: calculateItemTotalPrice(action.payload),
    options: newOptions
  }

  const duplicateLineItem = state.lineItems.find((prevLineItem: LineItem): boolean => _.isEqual(prevLineItem, lineItem))

  let newLineItems = null
  if (duplicateLineItem) {
    newLineItems = state.lineItems.map(
      (prevLineItem: LineItem): LineItem =>
        _.isEqual(prevLineItem, lineItem) ? { ...prevLineItem, quantity: prevLineItem.quantity + 1 } : prevLineItem
    )
  }

  const lineItems: LineItem[] = newLineItems || [...state.lineItems, lineItem]

  return {
    ...state,
    lineItems,
    totalPrice: lineItems.reduce(calculateTotalPrice, 0),
    totalQuantity: lineItems.reduce(calculateQuantity, 0)
  }
}

const cartReducer = (state = initialState, action: CartActionTypes): Cart => {
  switch (action.type) {
    case ADD_TO_CART:
      return addToCartTotals(state, action)
    default:
      return state
  }
}

export default cartReducer
