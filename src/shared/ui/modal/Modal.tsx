import { useRef } from "react";
import { useFocusTrap } from "@/shared/hooks/use-focus-trap/use-focus-trap";
import { cn } from "@/shared/shadcn/lib/utils";
import { Portal } from "../portal/Portal";

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
            "origin-top",
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
