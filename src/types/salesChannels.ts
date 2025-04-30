export interface SalesChannel {
  id: number;
  name: string;
  active: boolean;
  type: string; // e.g., "webshop", "boxoffice"
  configuration: Record<string, any>; // Configuration object for the sales channel
}

export interface SalesChannelDetails {
  name: string;
  active: boolean;
  type: string;
  configuration: Record<string, any>;
}