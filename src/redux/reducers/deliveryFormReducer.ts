import {
  SET_DELIVERY_TYPE,
  SET_STREET,
  SET_CITY,
  SET_STATE,
  SET_ZIP,
  DeliveryFormActionTypes
} from '../actions/deliveryFormActionTypes'
import { DeliveryForm } from '../state'

const initialState: DeliveryForm = {
  deliveryType: 'Pickup',
  address: {
    street: '',
    city: '',
    state: '',
    zip: ''
  }
}

const deliveryFormReducer = (state = initialState, action: DeliveryFormActionTypes): DeliveryForm => {
  switch (action.type) {
    case SET_DELIVERY_TYPE:
      return {
        ...state,
        deliveryType: action.payload
      }
    case SET_STREET:
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload
        }
      }
    case SET_CITY:
      return {
        ...state,
        address: {
          ...state.address,
          city: action.payload
        }
      }
    case SET_STATE:
      return {
        ...state,
        address: {
          ...state.address,
          state: action.payload
        }
      }
    case SET_ZIP:
      return {
        ...state,
        address: {
          ...state.address,
          zip: action.payload
        }
      }
    default:
      return state
  }
}

export default deliveryFormReducer
