import { Button } from "./ui/Button.tsx";
import { Cocktail } from "../models/Cocktail.ts";
import { cocktailToAdd } from "../models/mockData.ts";
import { useSignal } from "@preact/signals";
import { Input } from "./ui/Input.tsx";

export const AddCocktailForm = ({ onSubmit }: AddCocktailFormProps) => {
  const formValues = useSignal(cocktailToAdd);

  return (
    <form
      className="flex flex-col w-80 gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formValues.value);
      }}
    >
      <Input
        id="name"
        label="Name"
        type="text"
        value={formValues.value.name}
        onInput={(e) =>
          formValues.value = {
            ...formValues.value,
            name: e.currentTarget.value,
          }}
      />
      <Input
        id="ingredients"
        label="Ingredients"
        type="textarea"
        value={formValues.value.ingredients.join(", ")}
        onInput={(e) =>
          formValues.value = {
            ...formValues.value,
            ingredients: e.currentTarget.value.split(", "),
          }}
      />
      <Input
        id="tasteNotes"
        label="Taste Notes"
        type="text"
        value={formValues.value.tasteNotes}
        onInput={(e) =>
          formValues.value = {
            ...formValues.value,
            tasteNotes: e.currentTarget.value,
          }}
      />
      <Button type="submit" className="mt-4">Add</Button>
    </form>
  );
};
type AddCocktailFormProps = {
  onSubmit: (newCocktail: Cocktail) => void;
};
