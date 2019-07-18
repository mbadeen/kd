import React from 'react'
import { useSelector } from 'react-redux'
import { MenuItem } from '../../../redux/state'
import styles from './Options.css'

const Options: React.FC = (): JSX.Element => {
  const specialRequests = useSelector((state: MenuItem) => state.specialRequests)

  return (
    <div className={styles.options}>
      {specialRequests && specialRequests.extra ? (
        <label className={styles.optionsLabel} htmlFor="extra">
          <input className={styles.optionsCheckbox} type="checkbox" name="extra" />
          Extra
        </label>
      ) : null}
      <label className={styles.optionsLabel} htmlFor="gf">
        <input className={styles.optionsCheckbox} type="checkbox" name="gf" />
        Gluten free
      </label>
    </div>
  )
}

export default Options
