import React from 'react'
import styles from './Quantity.css'

const Quantity: React.FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.button}>
        -
      </button>
      <input type="text" className={styles.quantity} />
      <button type="button" className={styles.button}>
        +
      </button>
    </div>
  )
}

export default Quantity
