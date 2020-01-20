import ADD_TO_CART, { AddToCartAction } from './cartActionTypes';
import { LineItem } from '../state';

const addToCart = (lineItem: LineItem): AddToCartAction => ({
  type: ADD_TO_CART,
  payload: lineItem
});

export default addToCart;
