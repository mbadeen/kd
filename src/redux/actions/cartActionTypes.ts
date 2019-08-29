import { LineItem } from '../state'

export const ADD_TO_CART = 'ADD_TO_CART'

export interface AddToCartAction {
  type: typeof ADD_TO_CART
  payload: LineItem
}

export type CartActionTypes = AddToCartAction
