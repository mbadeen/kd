import React from 'react'
import styles from './CheckmarkSVG.css'

const CheckmarkSVG = () => (
  <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

export default CheckmarkSVG
