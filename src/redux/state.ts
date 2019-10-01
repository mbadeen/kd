export type LineItem = {
  basePriceTotal?: number
  name: string
  id: number
  unitPrice: number
  quantity: number
  options: SpecialRequest[]
  lineItemTotal?: number
}

export type Address = {
  street: string
  city: string
  state: string
  zip: string
}

export type DeliveryType = 'Delivery' | 'Pickup'

export type DeliveryForm = {
  address: Address
  deliveryType: DeliveryType
}

export type Cart = {
  lineItems: LineItem[]
  totalPrice: number
  totalQuantity: number
}

export type Order = {
  deliveryType: DeliveryType
  address: Address
  orderId: number
  orderDate: number
  cart: Cart
}

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
  id?: number
  label?: string
  unitPrice?: number
  optionsTotalPrice?: number
}

export type State = {
  menu: Meal[]
  cart: Cart
  deliveryForm: DeliveryForm
  order: Order
}
