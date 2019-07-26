import React, { ReactNode } from 'react'
import styles from './Checkbox.css'

interface Props {
  children?: ReactNode
  htmlFor: string
  name: string
}

const Checkbox: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <label className={styles.label} htmlFor={props.htmlFor}>
      <input className={styles.checkbox} type="checkbox" name={props.name} />
      {props.children}
    </label>
  )
}

export default Checkbox

Checkbox.defaultProps = {
  children: undefined
}
