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

const Checkbox: React.FC<Props> = (props: Props): JSX.Element => (
  <label className={styles.label} htmlFor={props.htmlFor}>
    <input
      checked={props.checked}
      className={styles.input}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      type="checkbox"
    />
    {props.children}
  </label>
);

export default Checkbox;

Checkbox.defaultProps = {
  children: undefined
};
