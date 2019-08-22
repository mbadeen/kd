import { SET_MENU, setMenuAction } from './menuActionTypes'
import { Meal } from '../state'

const setMenu = (menu: Meal[]): setMenuAction => ({
  type: SET_MENU,
  payload: menu
})

export default setMenu
