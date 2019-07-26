import React from 'react'
import Hamburger from '../../buttons/Hamburger'
import styles from './Header.css'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>KD</h1>
      <Hamburger />
    </header>
  )
}

export default Header
