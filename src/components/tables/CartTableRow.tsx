import React from 'react';
import styles from './CartTableRow.css';
import { DeliveryType, SpecialRequest } from '../../redux/state';

interface Props {
  deliveryType: DeliveryType;
  name: string;
  options: SpecialRequest[];
  unitPrice: number;
  quantity: number;
}

const CartTableRow: React.FC<Props> = (props: Props): JSX.Element => (
  <tr className={styles.tr}>
    <td>
      {props.name}
      <ul className={styles.optionLabelList}>
        {props.options.map(
          (option: SpecialRequest): JSX.Element => (
            <li className={styles.li} key={option.id}>
              {option.label}
            </li>
          )
        )}
      </ul>
    </td>
    <td className={styles.quantity}>{props.quantity}</td>
    <td className={styles.unitPrice}>
      {props.unitPrice}
      <ul>
        {props.options.map(
          (option: SpecialRequest): JSX.Element => (
            <li className={styles.li} key={option.id}>
              {option.unitPrice}
            </li>
          )
        )}
      </ul>
    </td>

    <td className={styles.totals}>
      {props.quantity * props.unitPrice}
      <ul>
        {props.options.map(
          (option: SpecialRequest): JSX.Element => (
            <li className={styles.li} key={option.id}>
              {props.quantity * (option.unitPrice || 0)}
            </li>
          )
        )}
      </ul>
    </td>
  </tr>
);

export default CartTableRow;
