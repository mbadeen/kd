import React from 'react';
import { useSelector } from 'react-redux';
import { cartSelector } from '../../redux/selectors';
import Section from '../layout/Section';
import AddressForm from '../forms/AddressForm';
import CartTable from '../tables/CartTable';
import PrimaryButton from '../buttons/PrimaryButton';
import styles from './Cart.css';

const Cart: React.FC = (): JSX.Element => {
  const cart = useSelector(cartSelector);

  return cart.length > 0 ? (
    <>
      <Section>
        <h1 className={styles.title}>Cart</h1>
        <article className={styles.article}>
          <h2>Delivery Options</h2>
          <p>
            Here we will need to explain how the delivery process works. Lets try and make it clear and concise and not
            use too much verbage. Or maybe we won&#39;t, maybe the radio buttons will be clear enough.
          </p>
        </article>
        <AddressForm />
      </Section>
      <hr className={styles.hr} />
      <Section>
        <CartTable />
        <div className={styles.button}>
          <PrimaryButton text="Proceed to Checkout" onClick={() => null} />
        </div>
      </Section>
    </>
  ) : (
    <article className={styles.emptyCart}>
      <h1 className={styles.emptyCartTitle}>There are no items in your cart</h1>
    </article>
  );
};

export default Cart;
