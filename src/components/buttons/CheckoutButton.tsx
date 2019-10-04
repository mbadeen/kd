import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartSelector, totalQuantitySelector } from '../../redux/selectors'
import ShoppingCartSVG from '../svg/ShoppingCartSVG'
import styles from './CheckoutButton.css'

const CheckoutButton: React.FC = (): JSX.Element | null => {
  const cart = useSelector(cartSelector)
  const totalQuantity = useSelector(totalQuantitySelector)

  return cart.length > 0 ? (
    <Link to="/cart" className={styles.link} role="button">
      Cart
      <ShoppingCartSVG />
      <span className={styles.span}>{totalQuantity}</span>
    </Link>
  ) : null
}

export default CheckoutButton
