import React from "react";

function Button({ children, type = "submit", variant = "primary", isDisable = false, }) {
  const baseClasses = "px-4 py-2 rounded-md font-medium transition duration-200";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 disabled:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
    success: "bg-green-500 text-white hover:bg-green-600 disabled:bg-green-300",
  };

  return (
    <button
      type={type}
      disabled={isDisable}
      className={`${baseClasses} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;