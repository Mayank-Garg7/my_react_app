import TodoContext from "../context/TodoContext";
import { useContext } from "react";

export const useWorkContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error("No Provider");
  return context;
};