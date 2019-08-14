import React from 'react'
import styles from './MenuItemFlag.css'

interface Props {
  src: string
  alt: string
  description: string
}

const MenuItemFlag: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <li className={styles.li}>
      <img className={styles.img} src={props.src} alt={props.alt} />
      {props.description}
    </li>
  )
}

export default MenuItemFlag
