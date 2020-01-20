import { calculateQuantity, calculateTotalPrice } from '../util/functions';
import { AddressForm, DeliveryType, LineItem, Meal, State } from './state';

export const addressFormSelector = (state: State): AddressForm => state.addressForm;

export const cartSelector = (state: State): LineItem[] => state.cart;

export const deliveryTypeSelector = (state: State): DeliveryType => state.addressForm.deliveryType;

export const menuSelector = (state: State): Meal[] => state.menu;

export const totalPriceSelector = (state: State): number => state.cart.reduce(calculateTotalPrice, 0);

export const totalQuantitySelector = (state: State): number => state.cart.reduce(calculateQuantity, 0);
