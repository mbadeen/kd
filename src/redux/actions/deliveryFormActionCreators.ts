import {
  SET_DELIVERY_TYPE,
  SET_STREET,
  SET_CITY,
  SET_STATE,
  SET_ZIP,
  SetDeliveryTypeAction,
  SetStreetAction,
  SetCityAction,
  SetStateAction,
  SetZipAction
} from './deliveryFormActionTypes'

import { DeliveryType } from '../state'

export const setDeliveryType = (deliveryType: DeliveryType): SetDeliveryTypeAction => ({
  type: SET_DELIVERY_TYPE,
  payload: deliveryType
})

export const setStreet = (street: string): SetStreetAction => ({
  type: SET_STREET,
  payload: street
})

export const setCity = (city: string): SetCityAction => ({
  type: SET_CITY,
  payload: city
})

export const setState = (state: string): SetStateAction => ({
  type: SET_STATE,
  payload: state
})

export const setZip = (zip: string): SetZipAction => ({
  type: SET_ZIP,
  payload: zip
})
