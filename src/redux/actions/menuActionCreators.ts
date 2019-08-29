import { SET_MENU, SetMenuAction } from './menuActionTypes'
import { Meal } from '../state'

const setMenu = (menu: Meal[]): SetMenuAction => ({
  type: SET_MENU,
  payload: menu
})

export default setMenu
