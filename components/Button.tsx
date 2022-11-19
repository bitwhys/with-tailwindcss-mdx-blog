import React from "react";

export type ButtonProps = {
  children: string
}

const Button = ({children}: ButtonProps) => {
  return (
    <button
      type="button"
      className="inline-flex items-center px-6 py-3 border border-zinc-500
        text-base font-medium rounded-full shadow-sm text-white bg-synth
        hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
        focus:ring-rose-500"
    >
      {children}
    </button>
  );
};

export default Button;
