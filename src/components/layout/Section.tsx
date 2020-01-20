import React, { ReactNode } from 'react';
import styles from './Section.css';

interface Props {
  children: ReactNode;
}

const Section: React.FC<Props> = (props: Props): JSX.Element => (
  <section className={styles.container}>{props.children}</section>
);

export default Section;
