import {
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  SET_LINE_ITEMS,
  LineItemActionTypes
} from '../actions/lineItemActiontypes'
import { LineItem } from '../state'
import { findLineItem } from '../../util/functions'

const initialState: LineItem[] = []

const lineItemReducer = (state = initialState, action: LineItemActionTypes) => {
  switch (action.type) {
    case DECREMENT_QUANTITY: {
      const index = findLineItem(state, action.payload.mealName)
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          quantity: action.payload.quantity - 1
        },
        ...state.slice(index + 1)
      ]
    }

    case INCREMENT_QUANTITY: {
      const index = findLineItem(state, action.payload.mealName)
      return [
        ...state.slice(0, index),
        {
          ...state[index],
          quantity: action.payload.quantity + 1
        },
        ...state.slice(index + 1)
      ]
    }

    case SET_LINE_ITEMS:
      return action.payload.map(meal => ({
        mealName: meal.name,
        quantity: 0
      }))

    default:
      return state
  }
}

export default lineItemReducer
