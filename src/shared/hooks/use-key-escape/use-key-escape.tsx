import { useEffect } from "react";

// useKeyEscape(handleEscape, modals.length > 0);

// const handleEscape = useCallback(() => {
//   const topModal = modals[modals.length - 1];
//   if (topModal?.closeOnEscape) closeTopModal();
// }, [modals, closeTopModal]);

export function useKeyEscape(handler: () => void, isEnabled: boolean) {
  useEffect(() => {
    if (!isEnabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handler();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handler, isEnabled]);
}

// // Escape через ref, щоб уникнути stale closure
// useEffect(() => {
//   if (modals.length === 0) return;

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key !== 'Escape') return;

//     const currentModals = modalsRef.current;
//     const topModal = currentModals[currentModals.length - 1];

//     if (topModal?.closeOnEscape) {
//       setModals((prev) => prev.slice(0, -1));
//     }
//   };

//   document.addEventListener('keydown', handleKeyDown);
//   return () => document.removeEventListener('keydown', handleKeyDown);
// }, [modals.length]); // залежимось тільки від кількості, не від об'єктів
