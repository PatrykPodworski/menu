import { Cocktail } from "../models/Cocktail.ts";
import { MenuItem } from "./MenuItem.tsx";

export const Menu = ({ items, title }: MenuProps) => {
  return (
    <article className="w-fit mx-auto">
      <header className="mb-16">
        <h1 className="text-6xl font-bold text-center">{title}</h1>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
        {items.map((x, index) => (
          <MenuItem
            key={x.name}
            inverted={index % 2 === 1}
            {...x}
          />
        ))}
      </section>
    </article>
  );
};

type MenuProps = {
  title: string;
  items: Cocktail[];
};
