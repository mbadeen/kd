import React from 'react';
import styles from './CartTableRow.css';
import { SpecialRequest } from '../../redux/state';

interface Props {
  name: string;
  options: SpecialRequest[];
  quantity: number;
  unitPrice: number;
}

const CartTableRow: React.FC<Props> = ({ name, options, quantity, unitPrice }: Props): JSX.Element => (
  <tr className={styles.tr}>
    <td>
      {name}
      <ul className={styles.optionLabelList}>
        {options.map(
          (option: SpecialRequest): JSX.Element => (
            <li className={styles.li} key={option.id}>
              {option.label}
            </li>
          )
        )}
      </ul>
    </td>
    <td className={styles.quantity}>{quantity}</td>
    <td className={styles.unitPrice}>
      {unitPrice}
      <ul>
        {options.map(
          (option: SpecialRequest): JSX.Element => (
            <li className={styles.li} key={option.id}>
              {option.unitPrice}
            </li>
          )
        )}
      </ul>
    </td>

    <td className={styles.totals}>
      {quantity * unitPrice}
      <ul>
        {options.map(
          (option: SpecialRequest): JSX.Element => (
            <li className={styles.li} key={option.id}>
              {quantity * (option.unitPrice || 0)}
            </li>
          )
        )}
      </ul>
    </td>
  </tr>
);

export default CartTableRow;
