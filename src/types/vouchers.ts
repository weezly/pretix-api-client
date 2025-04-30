export interface Voucher {
  id: number;
  code: string;
  value: number;
  max_usages: number;
  redeemed: number;
  valid_until?: string; // ISO 8601 date string
  item?: number; // Optional: ID of the associated item
  quota?: number; // Optional: ID of the associated quota
  event: string; // Event slug
}

export interface VoucherDetails {
  code: string;
  value: number;
  max_usages: number;
  valid_until?: string; // Optional expiration date
  item?: number; // Optional: ID of the associated item
  quota?: number; // Optional: ID of the associated quota
}