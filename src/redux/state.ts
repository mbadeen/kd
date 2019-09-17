export type LineItem = {
  name: string
  id: number
  price: number
  quantity: number
  options?: SpecialRequest[]
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
  price: number
  description: string
  specialFlags: SpecialFlag[]
  specialRequests: SpecialRequest[]
}

export type SpecialFlag = {
  flag?: 'Gluten Free' | 'Vegetarian' | 'Spicy'
  id?: number
}

export type SpecialRequest = {
  id?: number
  label?: string
  price?: number
}

export type State = {
  menu: Meal[]
  cart: Cart
  deliveryForm: DeliveryForm
  order: Order
}
