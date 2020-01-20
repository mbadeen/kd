import React, { ReactNode } from 'react';
import styles from './Main.css';

interface Props {
  children: ReactNode;
}

const Main: React.FC<Props> = (props: Props): JSX.Element => <main className={styles.container}>{props.children}</main>;

export default Main;
