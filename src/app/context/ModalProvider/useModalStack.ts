import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export function useModalStack() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModalStack have a problem");
  }
  return context;
}
