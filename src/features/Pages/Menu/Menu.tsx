import React from 'react'
import MenuItem from '../../forms/MenuItem'
import styles from './Menu.css'

const Menu: React.FC = (): JSX.Element => (
  <section className={styles.container}>
    <MenuItem />
  </section>
)

export default Menu
