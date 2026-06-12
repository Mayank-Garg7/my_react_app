import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
};

function Button({
  children,
  type = "submit",
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-800 text-white"
      : "bg-gray-400 text-black";

  return (
    <button
      type={type}
      className={`w-3/4 m-auto px-3 py-2 rounded-lg ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button;