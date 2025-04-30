export interface Discount {
  id: number;
  name: string;
  value: number; // Discount value (percentage or fixed amount)
  type: 'percentage' | 'fixed'; // Type of discount
  valid_until?: string; // ISO 8601 date string for expiration
  items?: number[]; // Optional: IDs of items the discount applies to
  quota?: number; // Optional: ID of the associated quota
}

export interface DiscountDetails {
  name: string;
  value: number;
  type: 'percentage' | 'fixed';
  valid_until?: string;
  items?: number[];
  quota?: number;
}