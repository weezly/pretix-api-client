export interface Membership {
  id: number;
  user: string; // User email or ID
  membership_type: number; // ID of the membership type
  valid_until?: string; // ISO 8601 date string for expiration
  created: string; // ISO 8601 timestamp
}

export interface MembershipDetails {
  user: string;
  membership_type: number;
  valid_until?: string;
}