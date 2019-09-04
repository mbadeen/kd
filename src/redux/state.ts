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

// export type Cart = {
//   orderNumber: number
//   date: number
//   lineItems: LineItem[]
// }

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
  cart: LineItem[]
}
