import { FETCH_MENU, menuActionTypes } from './menuActionTypes'

// Used to fetch menu items
export const fetchMenu = (): menuActionTypes => ({
  type: FETCH_MENU
})
