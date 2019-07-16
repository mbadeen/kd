// import { Action } from 'redux'
// import { ThunkAction } from 'redux-thunk'
import { SET_MENU, MenuActionTypes } from './menuActionTypes'
import { MenuItem } from '../state'
import '../../menu.json'

const setMenu = (menu: MenuItem[]): MenuActionTypes => ({
  type: SET_MENU,
  payload: menu
})

export default setMenu

// export const getMenu = (): ThunkAction<void, MenuItem[], null, Action<string>> => () => {
//   console.log('testing')
//   fetch(JSON.stringify(menu))
//     .then((response: Response) => console.log(response, menu))
//     .then(error => console.log('Unable to fetch menu :(', error))
// }

// export const getMenu = () => {
//   console.log('testing')
//   fetch(JSON.stringify(menu))
//     .then((response: Response) => console.log(response, menu))
//     .catch(error => console.log('Unable to fetch menu :(', error))
// }

// export const getMenu = () => {
//   return fetch('../../menu.json')
//     .then((response: Response) => {
//       console.log(response)
//       return response.json()
//     })
//     .then(data => console.log(JSON.stringify(data)))
//     .catch(error => console.log(error))
// }
