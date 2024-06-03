import { JSX } from "preact";
import clsx from "clsx";

export const Button = (
  { children, className, ...props }: JSX.HTMLAttributes<
    HTMLButtonElement
  >,
) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-teal-500 text-lg font-semibold rounded-lg hover:bg-teal-400 transition-colors duration-300 ease-in-out",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
