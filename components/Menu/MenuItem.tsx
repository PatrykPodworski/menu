import clsx from "clsx";

export const MenuItem = (
  { inverted, name, ingredients, src }: MenuItemProps,
) => (
  <div
    className={clsx("flex items-end gap-4", inverted && "flex-row-reverse")}
  >
    <img
      src={src}
      alt={name}
      class="h-48 lg:h-64 shrink-0"
    />
    <div className={clsx(inverted && "text-right")}>
      <h2 className="text-2xl font-bold ">{name}</h2>
      <ul>
        {ingredients.map((x) => <li key={x}>{x}</li>)}
      </ul>
    </div>
  </div>
);

type MenuItemProps = {
  inverted?: boolean;
  name: string;
  ingredients: string[];
  src: string;
};
