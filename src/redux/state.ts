export type LineItem = {
  name: string
  id: number
  unitPrice: number
  quantity: number
  options: SpecialRequest[]
}

export type DeliveryType = 'Delivery' | 'Pickup'

export type AddressForm = {
  deliveryType: DeliveryType
  street: string
  city: string
  state: string
  zip: string
}

// export type Order = {
//   deliveryType: DeliveryType
//   address: Address
//   orderId: number
//   orderDate: number
//   cart: LineItem[]
// }

export type Meal = {
  name: string
  id: number
  unitPrice: number
  description: string
  specialFlags: SpecialFlag[]
  specialRequests: SpecialRequest[]
}

export type SpecialFlag = {
  flag: 'Gluten Free' | 'Vegetarian' | 'Spicy'
  id: number
}

export type SpecialRequest = {
  id: number
  label: string
  unitPrice?: number
}

export type State = {
  menu: Meal[]
  cart: LineItem[]
  addressForm: AddressForm
}
