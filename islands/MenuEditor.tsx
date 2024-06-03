import { Button } from "../components/ui/Button.tsx";
import { Menu } from "../components/Menu.tsx";
import { Cocktail } from "../models/Cocktail.ts";
import { mockCocktails } from "../models/mockData.ts";
import { useSignal } from "@preact/signals";
import { AddCocktailForm } from "../components/AddCocktailForm.tsx";

export const MenuEditor = () => {
  const cocktails = useSignal(mockCocktails);
  const isFormOpen = useSignal(false);
  const handleAdd = (newCocktail: Cocktail) => {
    isFormOpen.value = false;
    cocktails.value = [...cocktails.value, newCocktail];
  };

  return (
    <>
      <Menu items={cocktails.value} title="The Menu" />
      <div className="mt-8">
        {isFormOpen.value ? <AddCocktailForm onSubmit={handleAdd} /> : (
          <Button
            onClick={() => isFormOpen.value = true}
          >
            Add new cocktail
          </Button>
        )}
      </div>
    </>
  );
};
