import React from 'react'
import { useDispatch } from 'react-redux'
import { DecrementQuantityFunction, IncrementQuantityFunction } from '../../redux/actions/lineItemActionCreators'
import styles from './Quantity.css'

interface Props {
  increment: IncrementQuantityFunction
  decrement: DecrementQuantityFunction
  quantity: number
}

const Quantity: React.FC<Props> = (props: Props): JSX.Element => {
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <button type="button" className={styles.button} onClick={() => dispatch(props.decrement(props.quantity))}>
        -
      </button>
      <input type="text" className={styles.input} value={props.quantity} />
      <button type="button" className={styles.button} onClick={() => dispatch(props.increment(props.quantity))}>
        +
      </button>
    </div>
  )
}

export default Quantity
