import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartSVG from '../svg/ShoppingCartSVG'
import styles from './CheckoutButton.css'
import { State } from '../../redux/state'

const CheckoutButton: React.FC = (): JSX.Element => {
  const cart = useSelector((state: State) => state.cart)

  return cart.length > 0 ? (
    <Link to="/cart" className={styles.link} role="button">
      Checkout
      <ShoppingCartSVG />
      <span className={styles.span}>
        {cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
      </span>
    </Link>
  ) : null
}

//   return cart.length > 0 ? (
//     <Link to="/cart" className={styles.link} role="button">
//       Checkout
//       <ShoppingCartSVG />
//       <span className={styles.span}>
//         {cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)}
//       </span>
//     </Link>
//   ) : (
//     <button className={styles.button} disabled>
//       Checkout <ShoppingCartSVG />
//     </button>
//   )
// }

export default CheckoutButton
