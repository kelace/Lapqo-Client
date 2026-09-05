import { createContext, useCallback, useEffect, useRef, useState } from "react";
import { useLockScroll } from "@/shared/hooks/use-lock-scroll/use-lock-scroll";
import { Modal } from "@/shared/ui/modal/Modal";
import type { ModalContextType, OpenModalOptions } from "./types";

export type ModalInstance = {
  id: string;
  content: React.ReactNode;
  closeOnEscape: boolean;
  closeOnOverlayClick: boolean;
  isTopmost?: boolean;
  position: "center" | "top";
};

export const ModalContext = createContext<ModalContextType | null>(null);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modals, setModals] = useState<ModalInstance[]>([]);
  const modalsRef = useRef(modals);
  modalsRef.current = modals;

  const openModal = useCallback(
    (content: React.ReactNode, options?: OpenModalOptions) => {
      const id = crypto.randomUUID();
      setModals((prev) => [
        ...prev,
        {
          id,
          content,
          closeOnEscape: options?.closeOnEscape ?? true,
          closeOnOverlayClick: options?.closeOnOverlayClick ?? true,
          position: options?.position ?? "center",
        },
      ]);
      return id;
    },
    [],
  );

  const closeModal = useCallback((id: string) => {
    setModals((prev) => prev.filter((m) => m.id !== id));
  }, []);

  const closeTopModal = useCallback(() => {
    setModals((prev) => prev.slice(0, -1));
  }, []);

  useEffect(() => {
    if (modals.length === 0) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      const topModal = modalsRef.current[modalsRef.current.length - 1];
      if (topModal?.closeOnEscape) {
        setModals((prev) => prev.slice(0, -1));
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modals.length > 0]);

  useLockScroll(modals.length > 0);

  const isTopmost = (id: string) => modals[modals.length - 1]?.id === id;

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          hasOverlay={isTopmost(modal.id)}
          position={modal.position}
          onOverlayClick={() => {
            if (modal.closeOnOverlayClick && isTopmost(modal.id)) {
              closeTopModal();
            }
          }}
          isTopmost={isTopmost(modal.id)}
        >
          {modal.content}
        </Modal>
      ))}
    </ModalContext.Provider>
  );
}
