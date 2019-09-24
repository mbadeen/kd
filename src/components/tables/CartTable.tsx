import React from 'react'
import { useSelector } from 'react-redux'
import CartTableHeader from './CartTableHeader'
import { State, LineItem } from '../../redux/state'
import CartTableRow from './CartTableRow'
import CarttableFooter from './CartTableFooter'
import styles from './CartTable.css'

const CartTable: React.FC = (): JSX.Element => {
  const cart = useSelector((state: State) => state.cart)
  return (
    <table className={styles.table}>
      <CartTableHeader />
      <tbody>
        {cart.lineItems.map((lineItem: LineItem) => (
          <CartTableRow
            options={lineItem.options}
            key={lineItem.id}
            name={lineItem.name}
            quantity={lineItem.quantity}
            unitPrice={lineItem.unitPrice}
            basePriceTotal={lineItem.basePriceTotal}
          />
        ))}
      </tbody>
      <CarttableFooter total={cart.totalPrice} />
    </table>
  )
}

export default CartTable
