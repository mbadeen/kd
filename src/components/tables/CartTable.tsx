import React from 'react'
import { useSelector } from 'react-redux'
import CartTableHeader from './CartTableHeader'
import CartTableRow from './CartTableRow'
import CarttableFooter from './CartTableFooter'
import { calculateTotalPrice } from '../../util/functions'
import { LineItem, State } from '../../redux/state'
import styles from './CartTable.css'

const CartTable: React.FC = (): JSX.Element => {
  const cart = useSelector((state: State): LineItem[] => state.cart)
  const totalPrice = useSelector((state: State): number => state.cart.reduce(calculateTotalPrice, 0))

  return (
    <table className={styles.table}>
      <CartTableHeader />
      <tbody>
        {cart.map(
          (lineItem: LineItem): JSX.Element => (
            <CartTableRow
              options={lineItem.options}
              key={lineItem.id}
              name={lineItem.name}
              quantity={lineItem.quantity}
              unitPrice={lineItem.unitPrice}
            />
          )
        )}
      </tbody>
      <CarttableFooter totalPrice={totalPrice} />
    </table>
  )
}

export default CartTable
