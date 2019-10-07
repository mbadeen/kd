import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { cartSelector, deliveryTypeSelector } from '../../redux/selectors'
import CartTableHeader from './CartTableHeader'
import CartTableRow from './CartTableRow'
import CarttableFooter from './CartTableFooter'
import { LineItem } from '../../redux/state'
import styles from './CartTable.css'

const CartTable: React.FC = (): JSX.Element => {
  const cart = useSelector(cartSelector)
  const deliveryType = useSelector(deliveryTypeSelector)

  const [deliveryFee, setDeliveryFee] = useState<boolean>(false)

  if (deliveryType === 'Delivery' && deliveryFee === false) {
    setDeliveryFee(true)
  }

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
              deliveryType={deliveryType}
            />
          )
        )}

        {deliveryFee ? (
          <tr
            className={deliveryType === 'Pickup' ? styles.none : styles.tr}
            onAnimationEnd={() => {
              if (deliveryFee) {
                setDeliveryFee(false)
              }
            }}
          >
            <td colSpan={2}>Delivery Fee</td>
            <td colSpan={2} className={styles.deliveryFee}>
              10
            </td>
          </tr>
        ) : null}
      </tbody>
      <CarttableFooter />
    </table>
  )
}

export default CartTable
