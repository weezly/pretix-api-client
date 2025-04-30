export interface Badge {
  id: number;
  name: string; // Name of the badge
  layout: string; // Layout identifier
  created: string; // ISO 8601 timestamp
}

export interface BadgeDetails {
  name: string;
  layout: string;
}