import React from 'react'
import styles from './TextField.css'
// import { OnChange } from '../types'

interface Props {
  name: string
  //   onChange: OnChange
  placeholder: string
  //   value: string | number
}
const TextField: React.FC<Props> = (props: Props): JSX.Element => (
  <input
    className={styles.input}
    // name={props.name}
    // onChange={props.onChange}
    placeholder={props.placeholder}
    type="text"
    // value={props.value}
  />
)

export default TextField
