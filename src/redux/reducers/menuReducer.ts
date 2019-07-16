import { SET_MENU, MenuActionTypes } from '../actions/menuActionTypes'
import { MenuItem } from '../state'

const initialState: MenuItem[] = []

const menuReducer = (state = initialState, action: MenuActionTypes) => {
  switch (action.type) {
    case SET_MENU:
      return action.payload
    default:
      return state
  }
}

export default menuReducer
