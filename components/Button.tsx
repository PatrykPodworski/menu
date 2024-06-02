import { ComponentChildren } from "preact";
import clsx from "clsx";

export const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "px-4 py-2 bg-teal-500 text-lg font-semibold rounded-lg hover:bg-teal-400 transition-colors duration-300 ease-in-out",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

type ButtonProps = {
  children: ComponentChildren;
  onClick?: () => void;
  className?: string;
};
