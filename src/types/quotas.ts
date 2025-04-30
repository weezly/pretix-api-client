export interface Quota {
  id: number;
  name: string;
  size: number;
  available: number;
  event: string;
}

export interface QuotaDetails {
  name: string;
  size: number;
}