export const mockData: Cocktail[] = [
  {
    name: "Old Fashioned",
    ingredients: ["Bourbon", "Simple Syrup", "Angostura Aromatic Bitters"],
    tasteNotes: "strong, smooth",
    src: "/cocktails/old-fashioned.png",
  },
  {
    name: "Daiquiri",
    ingredients: ["White Rum", "Lime Juice", "Simple Syrup"],
    tasteNotes: "sweet, sour",
    src: "/cocktails/daiquiri.png",
  },
  {
    name: "Gin & Tonic",
    ingredients: ["Gin", "Tonic Water", "Lime"],
    tasteNotes: "refreshing, bitter",
    src: "/cocktails/gin-tonic.png",
  },
  {
    name: "Negroni",
    ingredients: ["Gin", "Campari", "Sweet Vermouth"],
    tasteNotes: "bitter, strong",
    src: "/cocktails/negroni.png",
  },
  {
    name: "French 75",
    ingredients: ["Gin", "Lemon Juice", "Simple Syrup", "Champagne"],
    tasteNotes: "bubbly, light",
    src: "/cocktails/french-75.png",
  },
  {
    name: "Espresso Martini",
    ingredients: ["Vodka", "Kahlúa", "Espresso"],
    tasteNotes: "energizing, decadent",
    src: "/cocktails/espresso-martini.png",
  },
];

type Cocktail = {
  name: string;
  ingredients: string[];
  tasteNotes: string;
  src: string;
};
