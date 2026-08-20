import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/shared/shadcn/lib/utils";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    document.documentElement.style.setProperty("--theme-x", `${x}px`);
    document.documentElement.style.setProperty("--theme-y", `${y}px`);

    document.startViewTransition(() => {
      setTheme(isDark ? "light" : "dark");
    });
  };
  return (
    <button
      title="Toggle theme"
      onClick={handleToggle}
      className={cn(
        "flex h-8 w-8 cursor-pointer items-center justify-center",
        "rounded-md border",
        "hover:bg-accent",
        "transition-colors",
      )}
    >
      <span className="relative flex items-center justify-center">
        <Moon
          size={18}
          className={cn(
            "absolute transition-all duration-500 ease-out",
            isDark
              ? "translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100"
              : "translate-x-6 -translate-y-6 scale-0 rotate-180 opacity-0",
          )}
        />

        <Sun
          size={18}
          className={cn(
            "absolute transition-all duration-500 ease-out",
            isDark
              ? "-translate-x-6 translate-y-6 scale-0 rotate-180 opacity-0"
              : "translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100",
          )}
        />
      </span>
    </button>
  );
}
