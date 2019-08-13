import React from 'react'
import Checkbox from '../../inputs/Checkbox'
import Quantity from '../../buttons/Quantity'
import MenuItemFlag from '../../layout/Legend/MenuItemFlag'
import PrimaryButton from '../../buttons/PrimaryButton'
import handleFlagMatch from '../../../util/functions'
import { SpecialFlag, SpecialRequest } from '../../../redux/state'
import styles from './MenuItemCard.css'

interface Props {
  name: string
  price: number
  description: string
  specialFlags: SpecialFlag[]
  specialRequests: SpecialRequest[]
}

const MenuItemCard: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <div className={styles.item}>
          <h2>{props.name}</h2>
          <h2 className={styles.price}>{props.price}</h2>
        </div>
        <ul className={styles.flags}>
          {props.specialFlags.map((specialFlag: SpecialFlag) => (
            <MenuItemFlag
              key={specialFlag.id}
              description={specialFlag.flag}
              src={handleFlagMatch(specialFlag.flag)}
              alt={specialFlag.flag}
            />
          ))}
        </ul>
      </header>
      <p className={styles.description}>{props.description}</p>
      <footer className={styles.footer}>
        {props.specialRequests.length !== 0 ? (
          <div className={styles.options}>
            {props.specialRequests.map((specialRequest: SpecialRequest) => (
              <Checkbox key={specialRequest.id} htmlFor="specialRequest" name="specialRequest">
                {specialRequest.label} {specialRequest.price}
              </Checkbox>
            ))}
          </div>
        ) : null}
        <div className={styles.buttons}>
          <Quantity />
          <PrimaryButton text="Add to Cart" onClick={null} />
        </div>
      </footer>
    </article>
  )
}

export default MenuItemCard