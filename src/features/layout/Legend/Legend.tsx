import React from 'react'
import ItemFlag from './ItemFlag'
import styles from './Legend.css'
import gf from '../../../assets/icons/gf2.png'
import spicy from '../../../assets/icons/spicy2.png'
import vegan from '../../../assets/icons/vegan2.png'
import vegetarian from '../../../assets/icons/vegetarian2.png'
import nongmo from '../../../assets/icons/nongmo2.png'
import organic from '../../../assets/icons/organic2.png'
// import dairy from '../../../assets/icons/dairy.png'
// import nondairy from '../../../assets/icons/nondairy.png'
// import nuts from '../../../assets/icons/nuts.png'
// import nonuts from '../../../assets/icons/nonuts.png'
// import natural from '../../../assets/icons/natural.png'

const Legend: React.FC = (): JSX.Element => {
  return (
    <ul className={styles.legend}>
      <ItemFlag description="Gluten Free:" src={gf} alt="Gluten Free" />
      <ItemFlag description="Vegetarian:" src={vegetarian} alt="Vegetarian" />
      <ItemFlag description="Vegan:" src={vegan} alt="Vegan" />
      <ItemFlag description="Spicy:" src={spicy} alt="Spicy" />
      <ItemFlag description="Non GMO:" src={nongmo} alt="Non GMO" />
      <ItemFlag description="Organic:" src={organic} alt="Organic" />
    </ul>
  )
}

export default Legend
