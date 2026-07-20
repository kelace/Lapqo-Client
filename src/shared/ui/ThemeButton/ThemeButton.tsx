import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/shared/shadcn/lib/utils";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      title="Toggle theme"
      onClick={handleToggle}
      className={cn(
        "flex items-center justify-center",
        "h-8 w-8",
        "rounded-md border",
        "cursor-pointer",
        "hover:bg-accent hover:text-white",
        "transition-colors",
      )}
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
