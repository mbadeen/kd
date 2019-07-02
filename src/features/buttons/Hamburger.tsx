import React from 'react'
import styles from './Hamburger.css'

const Hamburger: React.FC = (): JSX.Element => (
  <button type="button" className={styles.hamburger}>
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </button>
)

export default Hamburger
