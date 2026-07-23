// import { useFocusTrap } from "@shared/hooks/useFocusTrap/useFocusTrap";
import { useRef } from "react";
import { useFocusTrap } from "@/shared/hooks/use-focus-trap/use-focus-trap";
import { Portal } from "../portal/Portal";
import style from "./Modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
  onOverlayClick?: () => void;
  hasOverlay?: boolean;
  isTopmost?: boolean;
};

export function Modal({
  children,
  onOverlayClick,
  hasOverlay = true,
  isTopmost = true,
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(contentRef, isTopmost);

  return (
    <Portal>
      <div className={style.modal} ref={contentRef}>
        {hasOverlay && (
          <div className={style.modalOverlay} onClick={onOverlayClick} />
        )}
        <div
          tabIndex={-1}
          className={style.modalContent}
          role="dialog"
          aria-modal="true"
          aria-label="modal window"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
