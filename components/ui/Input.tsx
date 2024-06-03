import { JSX } from "preact/jsx-runtime";
import clsx from "clsx";

export const Input = ({ label, className, ...props }: InputProps) => (
  <div className="flex flex-col">
    <label
      className="text-slate-50"
      htmlFor={props.id}
    >
      {label}
    </label>
    <input
      className={clsx("rounded-lg px-2 py-1 text-slate-950", className)}
      {...props}
    />
  </div>
);

type InputProps = JSX.HTMLAttributes<HTMLInputElement>;
