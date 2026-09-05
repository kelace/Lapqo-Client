import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTORS = ["a[href]", "button:not([disabled])", "input:not([disabled])", "textarea:not([disabled])", "select:not([disabled])", '[tabindex]:not([tabindex="-1"])'].join(", ");

const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)).filter((el) => el.offsetParent !== null);
};

export function useFocusTrap(ref: React.RefObject<HTMLElement | null>, isActive: boolean) {
  const prevFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive || !ref.current) return;
    prevFocusedElement.current = document.activeElement as HTMLElement;
    const container = ref.current;

    const focusableElements = getFocusableElements(container);
    if (focusableElements.length === 0) return;

    focusableElements[0]?.focus();

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const focusables = getFocusableElements(container);
      if (focusables.length === 0) return;

      const firstElement = focusables[0];
      const lastElement = focusables[focusables.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    container.addEventListener("keydown", handleTab);

    return () => {
      prevFocusedElement.current?.focus();
      container.removeEventListener("keydown", handleTab);
    };
  }, [isActive]);
}
