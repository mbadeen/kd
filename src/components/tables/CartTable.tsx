import React from 'react'
import { useSelector } from 'react-redux'
import CartTableHeader from './CartTableHeader'
import { State, LineItem } from '../../redux/state'
import CartTableRow from './CartTableRow'
import styles from './CartTable.css'

const CartTable: React.FC = (): JSX.Element => {
  const lineItems = useSelector((state: State) => state.cart.lineItems)
  return (
    <table className={styles.table}>
      <CartTableHeader />
      <tbody>
        {lineItems.map((lineItem: LineItem) => (
          <CartTableRow
            options={lineItem.options}
            key={lineItem.id}
            name={lineItem.name}
            quantity={lineItem.quantity}
            price={lineItem.price}
          />
        ))}
      </tbody>
    </table>
  )
}

export default CartTable
