export const card = {
  name: "Ancestor's Chosen",
  colors: ["White"],
  type: "Creature — Human Cleric",
  types: ["Creature"],
  subtypes: ["Human", "Cleric"],
  rarity: "Uncommon",
  text:
    "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen enters the battlefield, you gain 1 life for each card in your graveyard.",
  artist: "Pete Venters",
  number: "1",
  power: "4",
  toughness: "4",
  imageUrl:
    "http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=130550&type=card",
  variations: ["b7c19924-b4bf-56fc-aa73-f586e940bd42"],
  originalText:
    "First strike (This creature deals combat damage before creatures without first strike.)\nWhen Ancestor's Chosen comes into play, you gain 1 life for each card in your graveyard.",
  originalType: "Creature - Human Cleric",
  legalities: [
    {
      format: "Commander",
      legality: "Legal",
    },
    {
      format: "Duel",
      legality: "Legal",
    },
    {
      format: "Legacy",
      legality: "Legal",
    },
    {
      format: "Modern",
      legality: "Legal",
    },
    {
      format: "Paupercommander",
      legality: "Restricted",
    },
    {
      format: "Penny",
      legality: "Legal",
    },
    {
      format: "Premodern",
      legality: "Legal",
    },
    {
      format: "Vintage",
      legality: "Legal",
    },
  ],
  id: "5f8287b1-5bb6-5f4c-ad17-316a40d5bb0c",
};

export const responseMock = {
  data: {
    cards: [card]
  },
  headers: { "total-count": 99 },
};

export const fetcher = (): Promise<any> => Promise.resolve(responseMock);
