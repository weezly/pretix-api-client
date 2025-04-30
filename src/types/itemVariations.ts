export interface ItemVariation {
  id: number;
  item: number;
  name: Record<string, string>; // Multilingual object for variation name
  price?: number; // Optional price override
  active: boolean;
  position: number;
  values: number[]; // IDs of question options defining the variation
}

export interface ItemVariationDetails {
  name: Record<string, string>;
  price?: number;
  active: boolean;
  position: number;
  values: number[];
}