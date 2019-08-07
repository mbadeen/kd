import gf from '../assets/icons/gf2.png'
import spicy from '../assets/icons/spicy2.png'
import vegan from '../assets/icons/vegan2.png'
import vegetarian from '../assets/icons/vegetarian2.png'
import nongmo from '../assets/icons/nongmo2.png'
import organic from '../assets/icons/organic2.png'

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
