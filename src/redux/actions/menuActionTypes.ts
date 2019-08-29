import { Meal } from '../state'

export const SET_MENU = 'SET_MENU'

export interface SetMenuAction {
  type: typeof SET_MENU
  payload: Meal[]
}

export type MenuActionTypes = SetMenuAction
