export interface CheckInList {
  id: number;
  name: string;
  all_products: boolean;
  limit_products: number[]; // IDs of products this list is limited to
  include_pending: boolean;
  event: string; // Event slug
}

export interface CheckInListDetails {
  name: string;
  all_products: boolean;
  limit_products?: number[]; // Optional for unrestricted lists
  include_pending: boolean;
}