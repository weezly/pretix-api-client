export interface Shredder {
  identifier: string; // Unique identifier for the shredder
  name: string; // Display name of the shredder
  description: string; // Description of what the shredder does
}

export interface ShredderDetails {
  shredder: string; // Identifier of the shredder
  parameters?: Record<string, any>; // Optional parameters for the shredder
}