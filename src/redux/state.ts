// Order {
// 	orderNumber:
// 	date:
// 	LineItem[]
// }

// listOfOrders{date} [{order1}, {order2}]

// LineItem {
// 	MenuItem: {987-234-34-43-4}  / “Chicken Salad”
// 	Quantity:
// 	Options:
// }

// export type LineItem = {
// 	item: MenuItem,
// 	quantity: number,
// 	options: SpecialRequest[],
// 	lineItemTotal: number
// }

export type MenuItem = {
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
  menu: MenuItem[]
}
