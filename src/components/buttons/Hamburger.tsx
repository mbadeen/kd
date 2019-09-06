import React from 'react'
import styles from './Hamburger.css'

const Hamburger: React.FC = (): JSX.Element => (
  <button type="button" className={styles.button}>
    <span className={styles.span} />
    <span className={styles.span} />
    <span className={styles.span} />
  </button>
)

export default Hamburger
