import { LineItem } from '../redux/state'

import gf from '../assets/icons/gf.png'
import spicy from '../assets/icons/spicy.png'
import vegan from '../assets/icons/vegan.png'
import vegetarian from '../assets/icons/vegetarian.png'
import nongmo from '../assets/icons/nongmo.png'
import organic from '../assets/icons/organic.png'

// Find a particular line item's index so we can supply it with data.
export const findLineItem = (state: LineItem[], mealName: string) =>
  state.findIndex(element => element.mealName === mealName)

// Match special flags for a menu item with their corresponding images.
export const handleFlagMatch = (flag: string) => {
  switch (flag) {
    case 'Gluten Free':
      return gf
    case 'Non GMO':
      return nongmo
    case 'Organic':
      return organic
    case 'Spicy':
      return spicy
    case 'Vegan':
      return vegan
    case 'Vegetarian':
      return vegetarian
    default:
      return ''
  }
}

// Removes any non-digit characters.
export const removeNonDigits = (value: string): string => value.replace(/[^0-9]/g, '')

// For some reason js lets us change a string to a number using the + sign?
export const convertStringToNumber = (value: string): number => +value

export const checkBoundaries = (quantity: number): number => {
  if (quantity < 0) {
    return 0
  } else if (quantity > 10) {
    return 10
  } else {
    return quantity
  }
}
