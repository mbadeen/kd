import React from 'react'
import Options from '../Options'
import styles from './MenuItem.css'

const MenuItem: React.FC = (): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.item}>
      <h2>Chicken</h2>
      <h2 className={styles.price}>13</h2>
    </div>
    <div className={styles.description}>
      <p>This is a description of the chicken dish, not sure what to put here because I am not a chef.</p>
    </div>
    <Options />
  </div>
)

export default MenuItem
