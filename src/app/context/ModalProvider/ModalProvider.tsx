import { useCallback, useState } from "react";
import {
  ModalContext,
  type ModalType,
  type OpenModalType,
} from "./ModalContext";
import { useLockScroll } from "@/shared/hooks/useLockScroll/useLockScroll";
import { useKeyEscape } from "@/shared/hooks/useKeyEscape/useKeyEscape";
import { Modal } from "@/shared/ui/modal/Modal";

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modals, setModals] = useState<ModalType[]>([]);

  const openModal = (
    render: (id: string) => React.ReactNode,
    options?: OpenModalType,
  ) => {
    const id = crypto.randomUUID();
    setModals((prev) => [
      ...prev,
      {
        id,
        content: render(id),
        closeOnEscape: options?.closeOnEscape ?? true,
        closeOnOverlayClick: options?.closeOnOverlayClick ?? true,
      },
    ]);
    return id;
  };

  const closeModal = (id: string) => {
    setModals((prev) => prev.filter((modal) => modal.id !== id));
  };

  const closeTopModal = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  const handleEscape = useCallback(() => {
    const topModal = modals[modals.length - 1];
    if (topModal?.closeOnEscape) closeTopModal();
  }, [modals, closeTopModal]);

  useLockScroll(modals.length > 0);
  useKeyEscape(handleEscape, modals.length > 0);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modals.map((modal) => (
        <Modal
          key={modal.id}
          hasOverlay={modals[modals.length - 1].id === modal.id}
          onOverlayClick={() => modal.closeOnOverlayClick && closeTopModal()}
          isTopmost={modals[modals.length - 1].id === modal.id}
        >
          {modal.content}
        </Modal>
      ))}
    </ModalContext.Provider>
  );
}
