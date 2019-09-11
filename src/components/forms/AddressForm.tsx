import React from 'react'
import TextField from '../inputs/TextField'
import styles from './AddressForm.css'

const AddressForm = () => {
  return (
    <form className={styles.form}>
      <TextField name="address" placeholder="Address" />
      <TextField name="city" placeholder="City" />
      <TextField name="state" placeholder="State" />
      <TextField name="zip" placeholder="Zip" />
    </form>
  )
}

export default AddressForm
