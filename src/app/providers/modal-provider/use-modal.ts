import { useContext } from "react";
import { ModalContext } from "./modal-context";

export function useModalStack() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalStack have a problem");
  }
  return context;
}
