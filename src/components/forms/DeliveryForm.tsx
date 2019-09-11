import React, { useState } from 'react'
import Radio from '../inputs/Radio'
import TextField from '../inputs/TextField'
import styles from './DeliveryForm.css'

const DeliveryForm: React.FC = (): JSX.Element => {
  const [deliveryType, setDeliveryType] = useState('Pickup')

  const pickup = deliveryType === 'Pickup'
  const delivery = deliveryType === 'Delivery'

  return (
    <form className={styles.form}>
      <div className={styles.radioGroup}>
        <Radio
          checked={pickup}
          htmlFor="Pickup"
          id="Pickup"
          name="Pickup"
          onChange={event => setDeliveryType(event.currentTarget.value)}
          value="Pickup"
        >
          Pickup
        </Radio>
        <Radio
          checked={delivery}
          htmlFor="Delivery"
          id="Delivery"
          name="Delivery"
          onChange={event => setDeliveryType(event.currentTarget.value)}
          value="Delivery"
        >
          Delivery
        </Radio>
      </div>
      <TextField disabled={pickup} name="address" placeholder="Address" />
      <TextField disabled={pickup} name="city" placeholder="City" />
      <div className={styles.fieldWrap}>
        <TextField disabled={pickup} maxLength={2} minLength={2} name="state" placeholder="State" />
        <TextField disabled={pickup} maxLength={5} minLength={5} name="zip" placeholder="Zip" />
      </div>
    </form>
  )
}

export default DeliveryForm
