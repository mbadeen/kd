import React from 'react';
import styles from './MealFlag.css';

interface Props {
  alt: string;
  description: string;
  src: string;
}

const MealFlag: React.FC<Props> = ({ alt, description, src }: Props): JSX.Element => (
  <li className={styles.li}>
    <img className={styles.img} src={src} alt={alt} />
    {description}
  </li>
);

export default MealFlag;
