import React from 'react'
import Quantity from '../../buttons/Quantity'
import styles from './MenuItem.css'

const MenuItem: React.FC = (): JSX.Element => (
  <div className={styles.container}>
    <article>
      <div className={styles.item}>
        <h2>Chicken</h2>
        <h2 className={styles.price}>13</h2>
      </div>
      <hr className={styles.hr} />
      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>
          This is a description of the chicken dish, not sure what to put here because I am not a chef.
        </p>
      </div>
    </article>
    <Quantity />
  </div>
)

export default MenuItem
