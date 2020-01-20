import React from 'react';
import styles from './CartTableHeader.css';

const CartTableHeader: React.FC = (): JSX.Element => (
  <thead>
    <tr className={styles.tr}>
      <td className={styles.item}>Item</td>
      <td className={styles.quantity}>Qty</td>
      <td className={styles.unitPrice}>Unit</td>
      <td className={styles.price}>$</td>
    </tr>
  </thead>
);

export default CartTableHeader;
