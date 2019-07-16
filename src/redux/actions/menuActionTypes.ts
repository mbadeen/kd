import { MenuItem } from '../state'

export const SET_MENU = 'SET_MENU'

interface FetchMenuAction {
  type: typeof SET_MENU
  payload: MenuItem[]
}

export type MenuActionTypes = FetchMenuAction
