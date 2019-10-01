import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartSVG from '../svg/ShoppingCartSVG'
import styles from './CheckoutButton.css'
import { State } from '../../redux/state'

const CheckoutButton: React.FC = (): JSX.Element | null => {
  const cart = useSelector((state: State) => state.cart)

  return cart.lineItems.length > 0 ? (
    <Link to="/cart" className={styles.link} role="button">
      Cart
      <ShoppingCartSVG />
      <span className={styles.span}>{cart.totalQuantity}</span>
    </Link>
  ) : null
}

export default CheckoutButton
