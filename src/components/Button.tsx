// Exersice
import React, { ReactNode } from "react";

interface Props {
  children: string; // ReactNode;
  color?: string;
  onClick: () => void;
}
const Button = ({ children, onClick, color = "bg-blue-400" }: Props) => {
  return (
    <button
      className={"" + color + " bg-red-600  mx-2 rounded-xl w-20 h-12 "}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
