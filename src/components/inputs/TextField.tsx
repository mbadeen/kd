import React from 'react';
import styles from './TextField.css';
import { OnChange } from '../types';

interface Props {
  disabled: boolean;
  maxLength?: number;
  minLength?: number;
  name: string;
  onChange: OnChange;
  placeholder: string;
  value: string;
}
const TextField: React.FC<Props> = ({
  disabled,
  maxLength,
  minLength,
  name,
  onChange,
  placeholder,
  value
}: Props): JSX.Element => (
  <input
    className={styles.input}
    disabled={disabled}
    maxLength={maxLength}
    minLength={minLength}
    name={name}
    onChange={onChange}
    placeholder={placeholder}
    type="text"
    value={value}
  />
);

export default TextField;

TextField.defaultProps = {
  disabled: false,
  maxLength: undefined,
  minLength: undefined
};
