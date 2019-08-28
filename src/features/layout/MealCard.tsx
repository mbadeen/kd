import React, { useState } from 'react'
import Checkbox from '../inputs/Checkbox'
import Quantity from '../buttons/Quantity'
import MealFlag from './MealFlag'
import PrimaryButton from '../buttons/PrimaryButton'
import { handleFlagMatch, handleQuantityBoundaries } from '../../util/functions'
import { SpecialFlag, SpecialRequest } from '../../redux/state'

import styles from './MealCard.css'

interface Props {
  name: string
  price: number
  description: string
  specialFlags: SpecialFlag[]
  specialRequests: SpecialRequest[]
}

const MealCard: React.FC<Props> = (props: Props): JSX.Element => {
  const [quantity, setQuantity] = useState(0)
  const [options, setOptions] = useState([])

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
              <Checkbox
                onChange={event =>
                  setOptions(
                    event.currentTarget.checked
                      ? [
                          ...options,
                          { name: event.currentTarget.name, price: specialRequest.price, id: specialRequest.id }
                        ]
                      : options.filter(option => event.currentTarget.name !== option.name)
                  )
                }
                value={specialRequest.label}
                key={specialRequest.id}
                htmlFor={specialRequest.label}
                name={specialRequest.label}
              >
                {specialRequest.label} {specialRequest.price}
              </Checkbox>
            ))}
          </div>
        ) : null}
        <div className={styles.buttons}>
          <Quantity setQuantity={setQuantity} quantity={handleQuantityBoundaries(quantity)} />
          <PrimaryButton text="Add to Cart" onClick={null} />
        </div>
      </footer>
    </article>
  )
}

export default MealCard
