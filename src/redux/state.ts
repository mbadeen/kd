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

export type MenuItem = {
  name: string
  id: number
  price: number
  description: string
  specialFlags: SpecialFlags
  specialRequests: SpecialRequest[]
}

export type SpecialFlags = {
  glutenFree: boolean
  spicy: boolean
  vegetarian: boolean
  vegan: boolean
}

export type SpecialRequest = {
  id?: number
  label?: string
  price?: number
}

export type State = {
  menu: MenuItem[]
}
