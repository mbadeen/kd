import React from 'react'
import styles from './MealFlag.css'

interface Props {
  src: string
  alt: string
  description: string
}

const MealFlag: React.FC<Props> = (props: Props): JSX.Element => (
  <li className={styles.li}>
    <img className={styles.img} src={props.src} alt={props.alt} />
    {props.description}
  </li>
)

export default MealFlag
