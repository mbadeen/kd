import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import addToCart from '../../redux/actions/cartActionCreators'
import Checkbox from '../inputs/Checkbox'
import Quantity from '../buttons/Quantity'
import MealFlag from './MealFlag'
import PrimaryButton from '../buttons/PrimaryButton'
import { handleFlagMatch } from '../../util/functions'
import { SpecialFlag, SpecialRequest } from '../../redux/state'

import styles from './MealCard.css'

interface Props {
  name: string
  id: number
  price: number
  description: string
  specialFlags: SpecialFlag[]
  specialRequests: SpecialRequest[]
}

const MealCard: React.FC<Props> = (props: Props): JSX.Element => {
  const dispatch = useDispatch()

  const [quantity, setQuantity] = useState<number>(0)
  const [options, setOptions] = useState([])

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {props.name}
          <span className={styles.price}>{props.price}</span>
        </h1>
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
                checked={options.find(option => option.label === specialRequest.label) ? true : false}
                onChange={event =>
                  setOptions(
                    event.currentTarget.checked
                      ? [
                          ...options,
                          { id: specialRequest.id, label: event.currentTarget.name, price: specialRequest.price }
                        ]
                      : options.filter(option => event.currentTarget.name !== option.label)
                  )
                }
                key={specialRequest.id}
                htmlFor={specialRequest.label}
                id={specialRequest.label}
                name={specialRequest.label}
              >
                {specialRequest.label} {specialRequest.price}
              </Checkbox>
            ))}
          </div>
        ) : null}
        <div className={styles.buttons}>
          <Quantity setQuantity={setQuantity} value={quantity} lowerBoundary={0} upperBoundary={10} />
          <PrimaryButton
            text="Add to Cart"
            onClick={() => {
              dispatch(addToCart({ name: props.name, id: props.id, price: props.price, quantity, options })),
                setQuantity(0),
                setOptions([])
            }}
            disabled={quantity === 0}
          />
        </div>
      </footer>
    </article>
  )
}

export default MealCard
