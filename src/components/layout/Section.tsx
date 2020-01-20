import React, { ReactNode } from 'react';
import styles from './Section.css';

interface Props {
  children: ReactNode;
}

const Section: React.FC<Props> = ({ children }: Props): JSX.Element => (
  <section className={styles.container}>{children}</section>
);

export default Section;
