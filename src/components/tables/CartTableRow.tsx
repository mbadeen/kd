import React from 'react'
import styles from './CartTableRow.css'
import { SpecialRequest } from '../../redux/state'

interface Props {
  name: string
  quantity: number
  price: number
  options: SpecialRequest[]
}

const CartTableRow: React.FC<Props> = (props: Props): JSX.Element => (
  <tr className={styles.tr}>
    <td colSpan={3}>
      {props.name}
      <ul className={styles.labels}>
        {props.options.map((option: SpecialRequest) => (
          <li className={styles.li} key={option.id}>
            {option.label}
          </li>
        ))}
      </ul>
    </td>
    <td>{props.quantity}</td>
    <td>
      {props.price}
      <ul className={styles.prices}>
        {props.options.map((option: SpecialRequest) => (
          <li className={styles.li} key={option.id}>
            {option.price}
          </li>
        ))}
      </ul>
    </td>
  </tr>
)

// const CartTableRow: React.FC<Props> = (props: Props): JSX.Element => (
//   <>
//     <tr className={styles.tr}>
//       <td colSpan={3}>{props.name}</td>
//       <td>{props.quantity}</td>
//       <td>{props.price}</td>
//     </tr>
//     <tr>
//       {props.options.map((option: SpecialRequest) => (
//         <>
//           <td>{option.label}</td>
//           <td />
//           <td>{option.price}</td>
//         </>
//       ))}
//     </tr>
//   </>
// )

export default CartTableRow
