// import { useFocusTrap } from "@shared/hooks/useFocusTrap/useFocusTrap";
import { useRef } from "react";
import { useFocusTrap } from "@/shared/hooks/use-focus-trap/use-focus-trap";
import { cn } from "@/shared/shadcn/lib/utils";
import { Portal } from "../portal/Portal";

// import style from "./Modal.module.scss";

type ModalProps = {
  children: React.ReactNode;
  onOverlayClick?: () => void;
  hasOverlay?: boolean;
  isTopmost?: boolean;
  position?: "center" | "top";
};

export function Modal({
  children,
  onOverlayClick,
  position = "center",
  hasOverlay = true,
  isTopmost = true,
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useFocusTrap(contentRef, isTopmost);

  const positionClasses = {
    center: "items-center justify-center",
    top: "items-start justify-center pt-[15vh]",
  };

  return (
    <Portal>
      <div className={cn("fixed inset-0 z-50 flex", positionClasses[position])}>
        {hasOverlay && (
          <div
            className="animate-in fade-in absolute inset-0 bg-black/50 backdrop-blur-[2px] duration-200"
            onClick={onOverlayClick}
          />
        )}
        <div
          ref={contentRef}
          tabIndex={-1}
          className={cn(
            "relative z-10 flex justify-center overflow-hidden",
            "w-[90%] max-w-lg",
            "origin-top", // ← точка трансформації зверху
            "animate-[modal-open_0.2s_ease-out_both]",
            position === "top" ? "origin-top" : "origin-center",
          )}
          style={{
            animation: "modal-open 0.2s ease-out both",
          }}
          role="dialog"
          aria-modal="true"
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}

// .modal {
//   position: fixed;
//   inset: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 999;

//   &Overlay {
//     position: absolute;
//     inset: 0;
//     background: rgba(0, 0, 0, 0.5);
//   }

//   &Content {
//     position: relative;
//     // max-width: 320px;
//     width: 90%;
//     overflow: hidden;
//     display: flex;
//     justify-content: center;
//   }
// }
