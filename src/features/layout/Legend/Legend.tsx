import React from 'react'
import styles from './Legend.css'
import gf from '../../../assets/icons/gf.png'
import spicy from '../../../assets/icons/spicy.png'
import vegan from '../../../assets/icons/vegan.png'
import vegetarian from '../../../assets/icons/vegetarian.png'

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
        Vegetarian:
        <figure>
          <img src={vegetarian} alt="Vegetarian" />
        </figure>
      </li>
      <li>
        Vegan:
        <figure>
          <img src={vegan} alt="Vegan" />
        </figure>
      </li>
      <li>
        Spicy:
        <figure>
          <img src={spicy} alt="Spicy" />
        </figure>
      </li>
    </ul>
  )
}

export default Legend
