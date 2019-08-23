import React from 'react'
import { useDispatch } from 'react-redux'
import {
  DecrementQuantityFunction,
  IncrementQuantityFunction,
  ChangeQuantityFunction
} from '../../redux/actions/lineItemActionCreators'
import { removeNonDigits, convertStringToNumber } from '../../util/functions'
import styles from './Quantity.css'

interface Props {
  increment: IncrementQuantityFunction
  decrement: DecrementQuantityFunction
  quantity: number
  onChange: ChangeQuantityFunction
}

const Quantity: React.FC<Props> = (props: Props): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={() => dispatch(props.decrement(props.quantity))}>
        -
      </button>
      <input
        type="text"
        placeholder="0"
        className={styles.input}
        value={props.quantity || ''}
        onChange={event => dispatch(props.onChange(convertStringToNumber(removeNonDigits(event.target.value))))}
      />
      <button type="button" className={styles.button} onClick={() => dispatch(props.increment(props.quantity))}>
        +
      </button>
    </div>
  )
}

export default Quantity
