import { MenuItem } from "./MenuItem.tsx";
import { mockData } from "./mockData.ts";

export const Menu = () => {
  return (
    <article className="w-fit mx-auto">
      <header className="mb-16">
        <h1 className="text-6xl font-bold text-center">The Menu</h1>
      </header>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-16">
        {mockData.map((x, index) => (
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
