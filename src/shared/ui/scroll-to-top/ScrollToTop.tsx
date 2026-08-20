import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/shared/shadcn/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "group fixed bottom-10 left-10 z-100 flex size-9 cursor-pointer items-center justify-center rounded-full",
        "border border-white/10 bg-black/40 text-white shadow-lg backdrop-blur-sm",
        "transition-all duration-300 hover:bg-black/60",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0",
      )}
    >
      <span className="signal-wave signal-wave-1 border-400/90 pointer-events-none absolute inset-0 rounded-full border" />

      <span className="signal-wave signal-wave-2 pointer-events-none absolute inset-0 rounded-full border border-blue-400/70" />

      <ArrowUp className="relative z-10 size-5" />
    </button>
  );
}
