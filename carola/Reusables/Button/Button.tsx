import React from "react";
import type { ButtonProps } from "./ButtonProps";


const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  className,
  disabled = false,
  onclick,
}) => {
  const baseStyles = "px-4 py-2 rounded-sm font-semibold";

  const variants: Record<typeof variant, string> = {
    primary: "bg-[rgb(74,125,109)] text-white",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };


  return (
    <button
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${disabled && "opacity-50 cursor-not-allowed"}
        ${className}
      `}
      onClick={onclick}
    >
      {label}
    </button>
  );
};

export default Button;
