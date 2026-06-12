import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="relative bg-cyan-950 text-white px-4 py-6 font-bold text-xl w-2/4 mb-4 justify-self-center-safe rounded-xl">
      {children}
    </div>
  );
}

export default Card;