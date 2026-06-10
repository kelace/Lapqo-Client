import { createContext } from "react";

export type ModalContextType = {
  openModal: (
    render: (id: string) => React.ReactNode,
    options?: OpenModalType,
  ) => string;
  closeModal: (id: string) => void;
};

export type OpenModalType = {
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
};

export type ModalType = {
  id: string;
  content: React.ReactNode;
  closeOnEscape: boolean;
  closeOnOverlayClick: boolean;
  isTopmost?: boolean;
};

export const ModalContext = createContext<ModalContextType | null>(null);
