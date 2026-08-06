import { useEffect, type ComponentProps } from "react";
import { Search } from "lucide-react";
import { cn } from "@/shared/shadcn/lib/utils";

interface SearchButtonProps extends Omit<ComponentProps<"button">, "onClick"> {
  placeholder?: string;
  shortcut?: string;
  onClick?: () => void;
}

//shared/ui ???
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
        "bg-muted/50 text-muted-foreground hover:bg-muted flex w-full cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors",
        className,
      )}
      {...props}
    >
      <Search className="h-4 w-4 shrink-0" />
      <span className="flex-1 text-left">{placeholder}</span>
      <kbd className="bg-muted hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none sm:inline-flex">
        {shortcut}
      </kbd>
    </button>
  );
}
