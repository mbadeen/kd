import React, { ReactNode } from 'react'
import styles from './Radio.css'
import CheckmarkSVG from '../svg/CheckmarkSVG'
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
  <label className={props.checked ? styles.labelChecked : styles.label} htmlFor={props.htmlFor}>
    <input
      checked={props.checked}
      className={styles.input}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      type="radio"
      value={props.value}
    />
    {props.checked ? (
      <span className={styles.span}>
        <CheckmarkSVG />
      </span>
    ) : null}
    {props.children}
  </label>
)

export default Radio

Radio.defaultProps = {
  children: undefined
}
