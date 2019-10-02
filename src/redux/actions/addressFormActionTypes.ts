import { DeliveryType } from '../state'

export const SET_DELIVERY_TYPE = 'SET_DELIVERY_TYPE'
export const SET_STREET = 'SET_STREET'
export const SET_CITY = 'SET_CITY'
export const SET_STATE = 'SET_STATE'
export const SET_ZIP = 'SET_ZIP'

export interface SetDeliveryTypeAction {
  type: typeof SET_DELIVERY_TYPE
  payload: DeliveryType
}

export interface SetStreetAction {
  type: typeof SET_STREET
  payload: string
}
export interface SetCityAction {
  type: typeof SET_CITY
  payload: string
}
export interface SetStateAction {
  type: typeof SET_STATE
  payload: string
}
export interface SetZipAction {
  type: typeof SET_ZIP
  payload: string
}

export type AddressFormActionTypes =
  | SetDeliveryTypeAction
  | SetStreetAction
  | SetCityAction
  | SetStateAction
  | SetZipAction
