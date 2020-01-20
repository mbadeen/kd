import { LineItem } from '../state';

const ADD_TO_CART = 'ADD_TO_CART';

export default ADD_TO_CART;

export interface AddToCartAction {
  type: typeof ADD_TO_CART;
  payload: LineItem;
}

export type CartActionTypes = AddToCartAction;
