import React from 'react'
import styles from './ItemFlag.css'

interface Props {
  src: string
  alt: string
  description?: string
}

const ItemFlag: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <li className={styles.li}>
      {props.description ? <p>{props.description}</p> : null}
      <img className={styles.img} src={props.src} alt={props.alt} />
    </li>
  )
}

export default ItemFlag

ItemFlag.defaultProps = {
  description: undefined
}
