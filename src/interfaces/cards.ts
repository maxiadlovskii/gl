export type Colors = string[];

export interface Manufacturer {
  name: string;
  models: Array<{ name: string }>;
}
export interface Legality {
  format: string;
  legality: string;
}

export type Legalities = Legality[];

export interface Card {
  name: string;
  colors: Array<string>;
  type: string;
  types: Array<string>;
  subtypes: Array<string>;
  rarity: string;
  text: string;
  artist: string;
  power: string;
  toughness: string;
  imageUrl: string;
  originalText: string;
  originalType: string;
  id: string;
  legalities: Legalities;
}

export interface CardShort {
  rarity: string;
  imageUrl: string;
  id?: string;
}
