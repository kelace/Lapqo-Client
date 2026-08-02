export type OpenModalOptions = {
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  position?: "center" | "top";
};

export type ModalContextType = {
  openModal: (content: React.ReactNode, options?: OpenModalOptions) => string;
  closeModal: (id: string) => void;
};
