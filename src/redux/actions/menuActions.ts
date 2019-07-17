import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { SET_MENU, MenuActionTypes } from './menuActionTypes'
import { MenuItem } from '../state'

export const setMenu = (menu: MenuItem[]): MenuActionTypes => ({
  type: SET_MENU,
  payload: menu
})

export const getMenu = (): ThunkAction<void, MenuItem[], null, Action<string>> => async (dispatch: Dispatch) => {
  fetch('http://localhost:3001/menu')
    .then((response: Response) => response.json())
    .then(data => dispatch(setMenu(data)))
    .catch(error => console.log(error))
}
