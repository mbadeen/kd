import React, { ReactNode } from 'react'
import styles from './Radio.css'
import { OnChange } from '../types'

interface Props {
  checked: boolean
  children?: ReactNode
  htmlFor: string
  id: string
  name: string
  onChange: OnChange
  value: string
}

const Radio: React.FC<Props> = (props: Props): JSX.Element => (
  <label className={styles.label} htmlFor={props.htmlFor}>
    <input
      checked={props.checked}
      className={styles.input}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      type="radio"
      value={props.value}
    />
    {props.children}
  </label>
)

export default Radio

Radio.defaultProps = {
  children: undefined
}
