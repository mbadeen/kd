import React from 'react';
import styles from './PrimaryButton.css';
import { OnClick } from '../types';

interface Props {
  disabled?: boolean;
  onClick: OnClick;
  text: string;
}

const PrimaryButton: React.FC<Props> = ({ disabled, onClick, text }: Props): JSX.Element => (
  <button type="button" className={styles.button} disabled={disabled} onClick={onClick}>
    {text}
  </button>
);

export default PrimaryButton;

PrimaryButton.defaultProps = {
  disabled: false
};
