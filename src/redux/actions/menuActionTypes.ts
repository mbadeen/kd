import { Meal } from '../state';

const SET_MENU = 'SET_MENU';

export default SET_MENU;

export interface SetMenuAction {
  type: typeof SET_MENU;
  payload: Meal[];
}

export type MenuActionTypes = SetMenuAction;
