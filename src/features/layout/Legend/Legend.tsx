import React from 'react'
import styles from './Legend.css'
import gf from '../../../assets/icons/gf.png'
// import gf from '../../../assets/icons/gf.png'

const Legend: React.FC = (): JSX.Element => {
  return (
    <ul className={styles.legend}>
      <li>
        Gluten Free:
        <figure>
          <img src={gf} alt="Gluten Free" />
        </figure>
      </li>
      <li>
        Vegetarian:<span>Veg</span>
      </li>
      <li>
        Vegan:<span>V</span>
      </li>
      <li>
        Spicy:<span>S</span>
      </li>
    </ul>
  )
}

export default Legend
