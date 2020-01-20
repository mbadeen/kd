import React from 'react';
import styles from './TextField.css';
import { OnChange } from '../types';

interface Props {
  disabled: boolean;
  name: string;
  onChange: OnChange;
  maxLength?: number;
  minLength?: number;
  placeholder: string;
  value: string;
}
const TextField: React.FC<Props> = (props: Props): JSX.Element => (
  <input
    className={styles.input}
    disabled={props.disabled}
    maxLength={props.maxLength}
    minLength={props.minLength}
    name={props.name}
    onChange={props.onChange}
    placeholder={props.placeholder}
    type="text"
    value={props.value}
  />
);

export default TextField;

TextField.defaultProps = {
  disabled: false,
  maxLength: undefined,
  minLength: undefined
};
