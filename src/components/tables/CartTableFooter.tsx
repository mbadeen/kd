import React from 'react'
import styles from './CartTableFooter.css'

interface Props {
  totalPrice: number
}

const CartTableFooter: React.FC<Props> = (props: Props): JSX.Element => (
  <tfoot>
    <tr className={styles.tr}>
      <th colSpan={2} scope="row" className={styles.total}>
        Total:
      </th>
      <td colSpan={2} className={styles.price}>
        {props.totalPrice}
      </td>
    </tr>
  </tfoot>
)

export default CartTableFooter
