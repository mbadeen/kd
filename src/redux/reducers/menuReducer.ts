import { SET_MENU, MenuActionTypes } from '../actions/menuActionTypes'
import { Meal } from '../state'

const initialState: Meal[] = []

const menuReducer = (state = initialState, action: MenuActionTypes) => {
  switch (action.type) {
    case SET_MENU:
      return action.payload
    default:
      return state
  }
}

export default menuReducer
