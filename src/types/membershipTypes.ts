export interface MembershipType {
  id: number;
  name: string;
  description?: string;
  active: boolean;
}

export interface MembershipTypeDetails {
  name: string;
  description?: string;
  active: boolean;
}