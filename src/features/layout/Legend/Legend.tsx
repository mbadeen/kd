import React from 'react'
import styles from './Legend.css'

const Legend: React.FC = (): JSX.Element => {
  return (
    <ul className={styles.legend}>
      <li>
        Gluten Free:<span>GF</span>
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
