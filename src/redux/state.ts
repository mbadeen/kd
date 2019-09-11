// Order {
// 	orderNumber:
// 	date:
// 	LineItem[]
// }

// listOfOrders{date} [{order1}, {order2}]

export type LineItem = {
  name: string
  id: number
  price: number
  quantity: number
  options?: SpecialRequest[]
}

export type Address = {
  address: string
  city: string
  state: string
  zip: number
}
export type DeliveryType = {
  type: string
  location: Address
}

export type Cart = {
  lineItems: LineItem[]
  totalPrice: number
  totalQuantity: number
}

export type Order = {
  deliveryType: DeliveryType
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
  flag?: string
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
  order: Order
}
