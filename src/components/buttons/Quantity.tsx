import React from 'react'
import { removeNonDigits, convertStringToNumber, handleQuantityBoundaries } from '../../util/functions'
import styles from './Quantity.css'

interface Props {
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  value: number
  upperBoundary: number
  lowerBoundary: number
}

const Quantity: React.FC<Props> = (props: Props): JSX.Element => (
  <div className={styles.container}>
    <button
      type="button"
      className={styles.button}
      onClick={() =>
        props.setQuantity(handleQuantityBoundaries(props.value - 1, props.lowerBoundary, props.upperBoundary))
      }
    >
      -
    </button>
    <input
      type="text"
      className={styles.input}
      value={props.value}
      onChange={event =>
        props.setQuantity(
          handleQuantityBoundaries(
            convertStringToNumber(removeNonDigits(event.target.value)),
            props.lowerBoundary,
            props.upperBoundary
          )
        )
      }
    />
    <button
      type="button"
      className={styles.button}
      onClick={() =>
        props.setQuantity(handleQuantityBoundaries(props.value + 1, props.lowerBoundary, props.upperBoundary))
      }
    >
      +
    </button>
  </div>
)

export default Quantity
