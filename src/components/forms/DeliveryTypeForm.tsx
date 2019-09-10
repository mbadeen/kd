import React, { useState } from 'react'
import Radio from '../inputs/Radio'
import styles from './DeliveryTypeForm.css'

const DeliveryTypeForm = () => {
  const [deliveryType, setDeliveryType] = useState('Pickup')

  return (
    <form className={styles.form}>
      <Radio
        checked={deliveryType === 'Pickup'}
        htmlFor="Pickup"
        id="Pickup"
        name="Pickup"
        onChange={event => setDeliveryType(event.currentTarget.value)}
        value="Pickup"
      >
        Pickup
      </Radio>
      <Radio
        checked={deliveryType === 'Delivery'}
        htmlFor="Delivery"
        id="Delivery"
        name="Delivery"
        onChange={event => setDeliveryType(event.currentTarget.value)}
        value="Delivery"
      >
        Delivery
      </Radio>
    </form>
  )
}

export default DeliveryTypeForm
