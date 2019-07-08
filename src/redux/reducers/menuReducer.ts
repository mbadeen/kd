import { FETCH_MENU, menuActionTypes } from '../actions/menuActionTypes'

const initialState: boolean = false

const menuReducer = (state = initialState, action: menuActionTypes) => {
  switch (action.type) {
    case FETCH_MENU:
    default:
      return state
  }
}

export default menuReducer
