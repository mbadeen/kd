import { FETCH_MENU, menuActionTypes } from './menuActionTypes'

// Used to fetch menu items
const fetchMenu = (): menuActionTypes => ({
  type: FETCH_MENU
})

export default fetchMenu
