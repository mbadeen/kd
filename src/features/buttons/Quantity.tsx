import React from 'react'
import { removeNonDigits, convertStringToNumber } from '../../util/functions'
import styles from './Quantity.css'

interface Props {
  setQuantity: React.Dispatch<React.SetStateAction<number>>
  quantity: number
}

const Quantity: React.FC<Props> = (props: Props): JSX.Element => (
  <div className={styles.container}>
    <button type="button" className={styles.button} onClick={() => props.setQuantity(props.quantity - 1)}>
      -
    </button>
    <input
      type="text"
      className={styles.input}
      value={props.quantity}
      onChange={event => props.setQuantity(convertStringToNumber(removeNonDigits(event.target.value)))}
    />
    <button type="button" className={styles.button} onClick={() => props.setQuantity(props.quantity + 1)}>
      +
    </button>
  </div>
)

export default Quantity
