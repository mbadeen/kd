import {
  SET_DELIVERY_TYPE,
  SET_STREET,
  SET_CITY,
  SET_STATE,
  SET_ZIP,
  AddressFormActionTypes
} from '../actions/addressFormActionTypes'
import { AddressForm } from '../state'

const initialState: AddressForm = {
  deliveryType: 'Pickup',
  street: '',
  city: '',
  state: '',
  zip: ''
}

const deliveryFormReducer = (state = initialState, action: AddressFormActionTypes): AddressForm => {
  switch (action.type) {
    case SET_DELIVERY_TYPE:
      return {
        ...state,
        deliveryType: action.payload
      }

    case SET_STREET:
      return {
        ...state,
        street: action.payload
      }

    case SET_CITY:
      return {
        ...state,
        city: action.payload
      }

    case SET_STATE:
      return {
        ...state,
        state: action.payload
      }

    case SET_ZIP:
      return {
        ...state,
        zip: action.payload
      }
    default:
      return state
  }
}

export default deliveryFormReducer
