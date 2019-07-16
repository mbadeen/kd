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
  price: number
  description: string
  specialFlags: SpecialFlags
  specialRequests: SpecialRequests
}

export type SpecialFlags = {
  glutenFree: boolean
  spicy: boolean
  vegetarian: boolean
  vegan: boolean
}

export type SpecialRequests = {
  extra: boolean
  glutenFree: boolean
}
