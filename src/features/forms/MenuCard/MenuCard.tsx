import React from 'react'
import Options from '../Options'
import styles from './MenuCard.css'

interface Props {
  name: string
  price: number
  description: string
}

const MenuCard: React.FC<Props> = (props: Props): JSX.Element => (
  <article className={styles.container}>
    <header className={styles.item}>
      <h2>{props.name}</h2>
      <h2 className={styles.price}>{props.price}</h2>
    </header>
    <div className={styles.description}>
      <p>{props.description}</p>
    </div>
    <Options />
  </article>
)

export default MenuCard
