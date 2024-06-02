import { Button } from "../components/Button.tsx";
import { Menu } from "../components/Menu.tsx";
import { Cocktail } from "../models/Cocktail.ts";
import { cocktailToAdd, mockCocktails } from "../models/mockData.ts";
import { useSignal } from "@preact/signals";

export const MenuEditor = () => {
  const cocktails = useSignal(mockCocktails);
  const handleAdd = (newCocktail: Cocktail) => {
    cocktails.value = [...cocktails.value, newCocktail];
  };

  return (
    <>
      <Menu items={cocktails.value} title="The Menu" />
      <Button
        className="mt-8"
        onClick={() => handleAdd(cocktailToAdd)}
      >
        Add new cocktail
      </Button>
    </>
  );
};
