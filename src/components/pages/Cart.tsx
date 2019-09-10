import React from 'react'
import DeliveryTypeForm from '../forms/DeliveryTypeForm'
import styles from './Cart.css'

import TextField from '../inputs/TextField'

const Cart: React.FC = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Cart</h1>
      <article className={styles.article}>
        <h2>Delivery Options</h2>
        <p>
          Here we will need to explain how the delivery process works. Lets try and make it clear and concise and not
          use too much verbage. Or maybe we won&#39;t, maybe the radio buttons will be clear enough.
        </p>
      </article>
      <DeliveryTypeForm />
      <form className={styles.addressForm}>
        <TextField name="address" placeholder="Address" />
        <TextField name="city" placeholder="City" />
        <TextField name="state" placeholder="State" />
        <TextField name="zip" placeholder="Zip" />
      </form>
    </section>
  )
}

export default Cart
