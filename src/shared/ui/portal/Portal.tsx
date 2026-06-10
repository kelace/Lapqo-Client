import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
};

export function Portal({ children }: Props) {
  if (typeof window === "undefined") return null;

  const root = document.getElementById("modal-root");

  if (!root) return null;

  return createPortal(children, root);
}
