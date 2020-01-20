import React, { ReactNode } from 'react';
import styles from './Radio.css';
import CheckmarkSVG from '../svg/CheckmarkSVG';
import { OnChange } from '../types';

interface Props {
  checked: boolean;
  children?: ReactNode;
  htmlFor: string;
  id: string;
  name: string;
  onChange: OnChange;
  value: string;
}

const Radio: React.FC<Props> = ({ checked, children, htmlFor, id, name, onChange, value }: Props): JSX.Element => (
  <label className={checked ? styles.labelChecked : styles.label} htmlFor={htmlFor}>
    <input
      checked={checked}
      className={styles.input}
      id={id}
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
    />
    {checked ? (
      <span className={styles.span}>
        <CheckmarkSVG />
      </span>
    ) : null}
    {children}
  </label>
);

export default Radio;

Radio.defaultProps = {
  children: undefined
};
