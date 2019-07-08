import React from 'react'
import { ProgressPlugin } from 'webpack'
import Options from '../Options'
import styles from './MenuItem.css'

interface Props {
  name: string
  price: string
  description: string
}

const MenuItem: React.FC<Props> = (props: Props): JSX.Element => (
  <div className={styles.container}>
    <div className={styles.item}>
      <h2>{props.name}</h2>
      <h2 className={styles.price}>{props.price}</h2>
    </div>
    <div className={styles.description}>
      <p>{props.description}</p>
    </div>
    <Options />
  </div>
)

export default MenuItem
