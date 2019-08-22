import { Meal } from '../state'
import {
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  SET_LINE_ITEMS,
  setLineItemsAction,
  IncrementQuantityAction,
  DecrementQuantityAction
} from './lineItemActiontypes'

export type DecrementQuantityFunction = (quantity: number) => DecrementQuantityAction
export type IncrementQuantityFunction = (quantity: number) => IncrementQuantityAction

export const decrementQuantity = (mealName: string) => (quantity: number): DecrementQuantityAction => ({
  type: DECREMENT_QUANTITY,
  payload: { mealName, quantity }
})

export const incrementQuantity = (mealName: string) => (quantity: number): IncrementQuantityAction => ({
  type: INCREMENT_QUANTITY,
  payload: { mealName, quantity }
})

export const setLineItems = (meals: Meal[]): setLineItemsAction => ({
  type: SET_LINE_ITEMS,
  payload: meals
})
