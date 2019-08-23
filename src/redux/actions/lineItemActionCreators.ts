import { Meal } from '../state'
import {
  CHANGE_QUANTITY,
  DECREMENT_QUANTITY,
  INCREMENT_QUANTITY,
  SET_LINE_ITEMS,
  ChangeQuantityAction,
  DecrementQuantityAction,
  IncrementQuantityAction,
  setLineItemsAction
} from './lineItemActiontypes'

export type DecrementQuantityFunction = (quantity: number) => DecrementQuantityAction
export type IncrementQuantityFunction = (quantity: number) => IncrementQuantityAction
export type ChangeQuantityFunction = (quantity: number) => ChangeQuantityAction

export const decrementQuantity = (mealName: string) => (quantity: number): DecrementQuantityAction => ({
  type: DECREMENT_QUANTITY,
  payload: { mealName, quantity }
})

export const incrementQuantity = (mealName: string) => (quantity: number): IncrementQuantityAction => ({
  type: INCREMENT_QUANTITY,
  payload: { mealName, quantity }
})

export const changeQuantity = (mealName: string) => (quantity: number): ChangeQuantityAction => ({
  type: CHANGE_QUANTITY,
  payload: { mealName, quantity }
})

export const setLineItems = (meals: Meal[]): setLineItemsAction => ({
  type: SET_LINE_ITEMS,
  payload: meals
})
