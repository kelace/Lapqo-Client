import { Search } from "lucide-react";

export function SearchButton({
  placeholder = "Пошук...",
  shortcut = "ctrl+K",
}) {
  return (
    <button className="bg-muted/50 text-muted-foreground hover:bg-muted flex w-full items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors">
      <Search className="h-4 w-4" />
      <span className="flex-1 text-left">{placeholder}</span>
      <kbd className="bg-muted hidden h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium select-none sm:inline-flex">
        {shortcut}
      </kbd>
    </button>
  );
}
