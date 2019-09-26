import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Meal } from './state'
import setMenu from './actions/menuActionCreators'

const getMenu = (): ThunkAction<void, Meal[], null, Action<string>> => async (dispatch: Dispatch) =>
  fetch('http://localhost:3001/menu')
    .then((response: Response) => response.json())
    .then(data => dispatch(setMenu(data)))
    .catch(error => error)

export default getMenu
