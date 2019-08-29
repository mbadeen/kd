import React from 'react'
// import { removeNonDigits, convertStringToNumber } from '../../util/functions'
import styles from './Quantity.css'
import { OnClick, OnChange } from '../types'

// interface Props {
//   setQuantity: React.Dispatch<React.SetStateAction<number>>
//   quantity: number
// }

// const Quantity: React.FC<Props> = (props: Props): JSX.Element => (
//   <div className={styles.container}>
//     <button type="button" className={styles.button} onClick={() => props.setQuantity(props.quantity - 1)}>
//       -
//     </button>
//     <input
//       type="text"
//       className={styles.input}
//       value={props.quantity}
//       onChange={event => props.setQuantity(convertStringToNumber(removeNonDigits(event.target.value)))}
//     />
//     <button type="button" className={styles.button} onClick={() => props.setQuantity(props.quantity + 1)}>
//       +
//     </button>
//   </div>
// )

// export default Quantity

interface Props {
  decrement: OnClick
  increment: OnClick
  onChange: OnChange
  value: number
}

const Quantity: React.FC<Props> = (props: Props): JSX.Element => (
  <div className={styles.container}>
    <button type="button" className={styles.button} onClick={props.decrement}>
      -
    </button>
    <input className={styles.input} onChange={props.onChange} type="text" value={props.value} />
    <button type="button" className={styles.button} onClick={props.increment}>
      +
    </button>
  </div>
)

export default Quantity
