import React from 'react'
import Checkbox from '../inputs/Checkbox'
import Quantity from '../buttons/Quantity'
import MealFlag from './MealFlag'
import { decrementQuantity, incrementQuantity } from '../../redux/actions/lineItemActionCreators'
import PrimaryButton from '../buttons/PrimaryButton'
import { handleFlagMatch } from '../../util/functions'
import { SpecialFlag, SpecialRequest } from '../../redux/state'

import styles from './MealCard.css'

interface Props {
  name: string
  price: number
  description: string
  specialFlags: SpecialFlag[]
  specialRequests: SpecialRequest[]
  quantity: number
}

const MealCard: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h2 className={styles.item}>
          {props.name}
          <span className={styles.price}>{props.price}</span>
        </h2>
        <ul className={styles.flags}>
          {props.specialFlags.map((specialFlag: SpecialFlag) => (
            <MealFlag
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
          <Quantity
            quantity={props.quantity}
            decrement={decrementQuantity(props.name)}
            increment={incrementQuantity(props.name)}
          />
          <PrimaryButton text="Add to Cart" onClick={null} />
        </div>
      </footer>
    </article>
  )
}

export default MealCard
