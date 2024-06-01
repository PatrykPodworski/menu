export const mockData: Cocktail[] = [
  {
    name: "Old Fashioned",
    ingredients: ["Bourbon", "Simple Syrup", "Angostura Aromatic Bitters"],
    src: "/cocktails/old-fashioned.png",
  },
  {
    name: "Daiquiri",
    ingredients: ["White Rum", "Lime Juice", "Simple Syrup"],
    src: "/cocktails/daiquiri.png",
  },
  {
    name: "Gin & Tonic",
    ingredients: ["Gin", "Tonic Water", "Lime"],
    src: "/cocktails/gin-tonic.png",
  },
  {
    name: "Negroni",
    ingredients: ["Gin", "Campari", "Sweet Vermouth"],
    src: "/cocktails/negroni.png",
  },
  {
    name: "French 75",
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Champagne"],
    src: "/cocktails/french-75.png",
  },
  {
    name: "Espresso Martini",
    ingredients: ["Vodka", "Kahlúa", "Espresso"],
    src: "/cocktails/espresso-martini.png",
  },
];

type Cocktail = {
  name: string;
  ingredients: string[];
  src: string;
};
