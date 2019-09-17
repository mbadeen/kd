import React from 'react'
import styles from './CartTableHeader.css'

const CartTableHeader: React.FC = (): JSX.Element => (
  <thead>
    <tr className={styles.tr}>
      <td colSpan={3}>Item</td>
      <td>Quantity</td>
      <td>$</td>
    </tr>
  </thead>
)

export default CartTableHeader
