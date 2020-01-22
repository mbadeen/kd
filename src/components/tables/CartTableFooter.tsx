import React from 'react';
import { useSelector } from 'react-redux';
import { deliveryTypeSelector, totalPriceSelector } from '../../redux/selectors';
import styles from './CartTableFooter.css';

const CartTableFooter: React.FC = (): JSX.Element => {
  const deliveryType = useSelector(deliveryTypeSelector);
  const totalPrice = useSelector(totalPriceSelector);

  return (
    <tfoot>
      <tr className={styles.tr}>
        <th colSpan={2} scope="row" className={styles.total}>
          Total:
        </th>
        <td colSpan={2} className={styles.price}>
          {deliveryType === 'Pickup' ? totalPrice : totalPrice + 10}
        </td>
      </tr>
    </tfoot>
  );
};

export default CartTableFooter;
