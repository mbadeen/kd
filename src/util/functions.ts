import gf from '../assets/icons/gf.png'
import spicy from '../assets/icons/spicy.png'
import vegan from '../assets/icons/vegan.png'
import vegetarian from '../assets/icons/vegetarian.png'
import nongmo from '../assets/icons/nongmo.png'
import organic from '../assets/icons/organic.png'

// Match special flags for a menu item with their corresponding images.
const handleFlagMatch = (flag: string) => {
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

export default handleFlagMatch
