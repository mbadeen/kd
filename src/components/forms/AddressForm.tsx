import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDeliveryType, setStreet, setState, setCity, setZip } from '../../redux/actions/addressFormActionCreators'
import { addressFormSelector } from '../../redux/selectors'
import Radio from '../inputs/Radio'
import TextField from '../inputs/TextField'
import pickupAddress from '../../util/constants'
import styles from './AddressForm.css'
import { DeliveryType } from '../../redux/state'

const AddressForm: React.FC = (): JSX.Element => {
  const addressForm = useSelector(addressFormSelector)
  const dispatch = useDispatch()

  const delivery: boolean = addressForm.deliveryType === 'Delivery'
  const pickup: boolean = addressForm.deliveryType === 'Pickup'

  return (
    <form className={styles.form}>
      <div className={styles.radioGroup}>
        <Radio
          checked={pickup}
          htmlFor="Pickup"
          id="Pickup"
          name="Pickup"
          onChange={event => dispatch(setDeliveryType(event.currentTarget.value as DeliveryType))}
          value="Pickup"
        >
          Pickup
        </Radio>
        <Radio
          checked={delivery}
          htmlFor="Delivery"
          id="Delivery"
          name="Delivery"
          onChange={event => dispatch(setDeliveryType(event.currentTarget.value as DeliveryType))}
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
        value={pickup ? pickupAddress.street : addressForm.street}
      />
      <TextField
        disabled={pickup}
        name="city"
        onChange={event => dispatch(setCity(event.currentTarget.value))}
        placeholder="City"
        value={pickup ? pickupAddress.city : addressForm.city}
      />
      <div className={styles.fieldWrap}>
        <TextField
          disabled={pickup}
          maxLength={2}
          minLength={2}
          name="state"
          onChange={event => dispatch(setState(event.currentTarget.value))}
          placeholder="State"
          value={pickup ? pickupAddress.state : addressForm.state}
        />
        <TextField
          disabled={pickup}
          maxLength={5}
          minLength={5}
          name="zip"
          onChange={event => dispatch(setZip(event.currentTarget.value))}
          placeholder="Zip"
          value={pickup ? pickupAddress.zip : addressForm.zip}
        />
      </div>
    </form>
  )
}

export default AddressForm
