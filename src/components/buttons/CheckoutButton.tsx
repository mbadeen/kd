import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ShoppingCartSVG from '../svg/ShoppingCartSVG'
import { calculateQuantity } from '../../util/functions'
import { LineItem, State } from '../../redux/state'
import styles from './CheckoutButton.css'

const CheckoutButton: React.FC = (): JSX.Element | null => {
  const cart = useSelector((state: State): LineItem[] => state.cart)
  const totalQuantity = useSelector((state: State): number => state.cart.reduce(calculateQuantity, 0))

  return cart.length > 0 ? (
    <Link to="/cart" className={styles.link} role="button">
      Cart
      <ShoppingCartSVG />
      <span className={styles.span}>{totalQuantity}</span>
    </Link>
  ) : null
}

export default CheckoutButton
