import { Action, Dispatch } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { Meal } from './state'
import setMenu from './actions/menuActionCreators'
import { setLineItems } from './actions/lineItemActionCreators'

const getMenuPageData = (): ThunkAction<void, Meal[], null, Action<string>> => async (dispatch: Dispatch) => {
  fetch('http://localhost:3001/menu')
    .then((response: Response) => response.json())
    .then(data => {
      dispatch(setMenu(data))
      return data
    })
    .then(data => dispatch(setLineItems(data)))
    .catch(error => error)
}

export default getMenuPageData
