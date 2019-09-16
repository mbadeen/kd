import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryType, setStreet, setState, setCity, setZip } from '../../redux/actions/deliveryFormActionCreators'
import Radio from '../inputs/Radio'
import TextField from '../inputs/TextField'
import pickupAddress from '../../util/constants'
import styles from './DeliveryForm.css'
import { State } from '../../redux/state'

const DeliveryForm: React.FC = (): JSX.Element => {
  const deliveryForm = useSelector((state: State) => state.deliveryForm)
  const dispatch = useDispatch()

  const delivery: boolean = deliveryForm.deliveryType === 'Delivery'
  const pickup: boolean = deliveryForm.deliveryType === 'Pickup'

  return (
    <form className={styles.form}>
      <div className={styles.radioGroup}>
        <Radio
          checked={pickup}
          htmlFor="Pickup"
          id="Pickup"
          name="Pickup"
          onChange={event => dispatch(setDeliveryType(event.currentTarget.value))}
          value="Pickup"
        >
          Pickup
        </Radio>
        <Radio
          checked={delivery}
          htmlFor="Delivery"
          id="Delivery"
          name="Delivery"
          onChange={event => dispatch(setDeliveryType(event.currentTarget.value))}
          value="Delivery"
        >
          Delivery
        </Radio>
      </div>
      <TextField
        disabled={pickup}
        name="street"
        onChange={event => dispatch(setStreet(event.currentTarget.value))}
        placeholder="Address"
        value={pickup ? pickupAddress.street : deliveryForm.address.street}
      />
      <TextField
        disabled={pickup}
        name="city"
        onChange={event => dispatch(setCity(event.currentTarget.value))}
        placeholder="City"
        value={pickup ? pickupAddress.city : deliveryForm.address.city}
      />
      <div className={styles.fieldWrap}>
        <TextField
          disabled={pickup}
          maxLength={2}
          minLength={2}
          name="state"
          onChange={event => dispatch(setState(event.currentTarget.value))}
          placeholder="State"
          value={pickup ? pickupAddress.state : deliveryForm.address.state}
        />
        <TextField
          disabled={pickup}
          maxLength={5}
          minLength={5}
          name="zip"
          onChange={event => dispatch(setZip(event.currentTarget.value))}
          placeholder="Zip"
          value={pickup ? pickupAddress.zip : deliveryForm.address.zip}
        />
      </div>
    </form>
  )
}

export default DeliveryForm
