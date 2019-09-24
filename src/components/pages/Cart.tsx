import React from 'react'
import { useSelector } from 'react-redux'
import DeliveryForm from '../forms/DeliveryForm'
import CartTable from '../tables/CartTable'
import styles from './Cart.css'
import { State } from '../../redux/state'

const Cart: React.FC = (): JSX.Element => {
  const lineItems = useSelector((state: State) => state.cart.lineItems)

  return lineItems.length > 0 ? (
    <>
      <section className={styles.section}>
        <h1 className={styles.title}>Cart</h1>
        <article className={styles.article}>
          <h1>Delivery Options</h1>
          <p>
            Here we will need to explain how the delivery process works. Lets try and make it clear and concise and not
            use too much verbage. Or maybe we won&#39;t, maybe the radio buttons will be clear enough.
          </p>
        </article>
        <DeliveryForm />
      </section>
      <section className={styles.cart}>
        <CartTable />
      </section>
    </>
  ) : (
    <article className={styles.emptyCart}>
      <h1 className={styles.emptyCartTitle}>There are no items in your cart</h1>
    </article>
  )
}

export default Cart
