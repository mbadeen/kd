import React, { ReactNode } from 'react';
import styles from './Checkbox.css';
import { OnChange } from '../types';

interface Props {
  checked: boolean;
  children?: ReactNode;
  htmlFor?: string;
  id?: string;
  name?: string;
  onChange: OnChange;
}

const Checkbox: React.FC<Props> = ({ checked, children, htmlFor, id, name, onChange }: Props): JSX.Element => (
  <label className={styles.label} htmlFor={htmlFor}>
    <input checked={checked} className={styles.input} id={id} name={name} onChange={onChange} type="checkbox" />
    {children}
  </label>
);

export default Checkbox;

Checkbox.defaultProps = {
  children: undefined
};
