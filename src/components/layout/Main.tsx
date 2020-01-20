import React, { ReactNode } from 'react';
import styles from './Main.css';

interface Props {
  children: ReactNode;
}

const Main: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <main className={styles.container}>{children}</main>
);

export default Main;
