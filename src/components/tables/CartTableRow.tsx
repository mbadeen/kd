import React from 'react'
import styles from './CartTableRow.css'
import { SpecialRequest } from '../../redux/state'

interface Props {
  basePriceTotal: number
  name: string
  options: SpecialRequest[]
  unitPrice: number
  quantity: number
}

const CartTableRow: React.FC<Props> = (props: Props): JSX.Element => (
  <tr className={styles.tr}>
    <td>
      {props.name}
      <ul className={styles.optionLabelList}>
        {props.options.map((option: SpecialRequest) => (
          <li className={styles.li} key={option.id}>
            {option.label}
          </li>
        ))}
      </ul>
    </td>
    <td className={styles.quantity}>{props.quantity}</td>
    <td className={styles.unitPrice}>
      {props.unitPrice}
      <ul className={styles.optionPriceList}>
        {props.options.map((option: SpecialRequest) => (
          <li className={styles.li} key={option.id}>
            {option.unitPrice}
          </li>
        ))}
      </ul>
    </td>
    <td className={styles.totals}>
      {props.basePriceTotal}
      <ul className={styles.optionPriceList}>
        {props.options.map((option: SpecialRequest) => (
          <li className={styles.li} key={option.id}>
            {option.optionsTotalPrice}
          </li>
        ))}
      </ul>
    </td>
  </tr>
)

export default CartTableRow
