import React from 'react'
import styles from './Options.css'

const Options: React.FC = (): JSX.Element => (
  <div className={styles.options}>
    <label className={styles.optionsLabel} htmlFor="extra">
      <input className={styles.optionsCheckbox} type="checkbox" name="extra" />
      Extra chicken
    </label>
    <label className={styles.optionsLabel} htmlFor="gf">
      <input className={styles.optionsCheckbox} type="checkbox" name="gf" />
      Gluten free
    </label>
  </div>
)

export default Options
