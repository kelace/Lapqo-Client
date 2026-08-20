import { useEffect, type ComponentProps } from "react";
import { Search } from "lucide-react";
import { cn } from "@/shared/shadcn/lib/utils";

interface SearchButtonProps extends Omit<ComponentProps<"button">, "onClick"> {
  placeholder?: string;
  shortcut?: string;
  onClick?: () => void;
}

export function SearchButton({
  placeholder = "Search...",
  shortcut = "Ctrl K",
  onClick,
  className,
  ...props
}: SearchButtonProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMod = e.metaKey || e.ctrlKey;

      if (isMod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClick?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClick]);

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "bg-muted/50 text-muted-foreground hover:bg-muted",
        "flex size-9 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg",
        "px-0 text-sm transition-colors",
        "min-[480px]:h-auto min-[480px]:w-full min-[480px]:justify-start min-[480px]:px-3 min-[480px]:py-2",
        className,
      )}
      {...props}
    >
      <Search className="size-4 shrink-0" />

      <span className="hidden flex-1 text-left min-[480px]:block">
        {placeholder}
      </span>

      <kbd className="bg-muted hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none min-[480px]:inline-flex">
        {shortcut}
      </kbd>
    </button>
  );
}
