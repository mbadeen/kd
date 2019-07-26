import React from 'react'
import Checkbox from '../../inputs/Checkbox'
import Quantity from '../../buttons/Quantity'
import { SpecialRequest } from '../../../redux/state'
import styles from './MenuItemCard.css'

interface Props {
  name: string
  price: number
  description: string
  specialRequests: SpecialRequest[]
}

const MenuItemCard: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <article className={styles.menuCard}>
      <header className={styles.header}>
        <h2>{props.name}</h2>
        <h2 className={styles.price}>{props.price}</h2>
      </header>
      <div className={styles.description}>
        <p>{props.description}</p>
      </div>
      <footer className={styles.footer}>
        <div className={styles.options}>
          {props.specialRequests.map((specialRequest: SpecialRequest) => (
            <Checkbox key={specialRequest.id} htmlFor="specialRequest" name="specialRequest">
              {specialRequest.label} {specialRequest.price}
            </Checkbox>
          ))}
        </div>

        <Quantity />
      </footer>
    </article>
  )
}

export default MenuItemCard
