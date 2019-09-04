import React, { ReactNode } from 'react'
import styles from './Checkbox.css'
import { OnChange } from '../types'

interface Props {
  checked: boolean
  children?: ReactNode
  htmlFor: string
  name: string
  value: string
  onChange: OnChange
}

const Checkbox: React.FC<Props> = (props: Props): JSX.Element => (
  <label className={styles.label} htmlFor={props.htmlFor}>
    <input
      checked={props.checked}
      className={styles.checkbox}
      type="checkbox"
      name={props.name}
      onChange={props.onChange}
      value={props.value}
    />
    {props.children}
  </label>
)

export default Checkbox

Checkbox.defaultProps = {
  children: undefined
}
