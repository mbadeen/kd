import React from 'react';
import Hamburger from '../buttons/Hamburger';
import CheckoutButton from '../buttons/CartButton';
import styles from './Header.css';

const Header: React.FC = (): JSX.Element => (
  <header className={styles.header}>
    <h1 className={styles.logo}>KD</h1>
    <CheckoutButton />
    <Hamburger />
  </header>
);

export default Header;
