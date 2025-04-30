export interface Cart {
  id: string; // Unique cart identifier
  items: CartItem[];
  total: number; // Total price of the cart
  created: string; // ISO 8601 timestamp
}

export interface CartItem {
  item: number; // ID of the item
  variation?: number; // Optional: ID of the item variation
  quantity: number;
  price: number; // Price per unit
}

export interface CartDetails {
  items: {
    item: number;
    variation?: number;
    quantity: number;
  }[];
}