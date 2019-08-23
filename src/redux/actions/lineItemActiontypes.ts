import { Meal } from '../state'

export const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY'
export const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
export const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY'
export const SET_LINE_ITEMS = 'SET_LINE_ITEMS'

export interface DecrementQuantityAction {
  type: typeof DECREMENT_QUANTITY
  payload: { mealName: string; quantity: number }
}

export interface ChangeQuantityAction {
  type: typeof CHANGE_QUANTITY
  payload: { mealName: string; quantity: number }
}

export interface IncrementQuantityAction {
  type: typeof INCREMENT_QUANTITY
  payload: { mealName: string; quantity: number }
}

export interface setLineItemsAction {
  type: typeof SET_LINE_ITEMS
  payload: Meal[]
}

export type LineItemActionTypes =
  | DecrementQuantityAction
  | IncrementQuantityAction
  | setLineItemsAction
  | ChangeQuantityAction
