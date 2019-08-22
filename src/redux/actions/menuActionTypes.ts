import { Meal } from '../state'

export const SET_MENU = 'SET_MENU'

export interface setMenuAction {
  type: typeof SET_MENU
  payload: Meal[]
}

export type MenuActionTypes = setMenuAction
