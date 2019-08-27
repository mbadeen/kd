import React from 'react'
import styles from './PrimaryButton.css'
import { OnClick } from '../types'

interface Props {
  text: string
  onClick: OnClick
  disabled?: boolean
}

const PrimaryButton: React.FC<Props> = (props: Props): JSX.Element => (
  <button type="button" className={styles.button} disabled={props.disabled} onClick={props.onClick}>
    {props.text}
  </button>
)

export default PrimaryButton

PrimaryButton.defaultProps = {
  disabled: false
}
