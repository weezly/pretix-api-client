export interface WaitingListEntry {
  id: number;
  email: string;
  item: number; // ID of the item the user is waiting for
  variation?: number; // Optional: ID of the item variation
  created: string; // ISO 8601 timestamp
  redeemed: boolean;
}

export interface WaitingListEntryDetails {
  email: string;
  item: number;
  variation?: number;
}