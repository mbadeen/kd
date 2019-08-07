import React from 'react'
import styles from './PrimaryButton.css'

interface Props {
  text: string
  onClick: (event: React.MouseEvent) => void
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
