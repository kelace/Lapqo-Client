import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SettingsBar() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="
      flex 
      items-center 
      gap-2 
      bg-neutral-100 
      rounded-lg 
      px-3 py-2 
      text-[13px] 
      text-neutral-400"
    >
      <button
        type="button"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
      </button>

      <Settings size={14} />
      <LogOut size={14} />
    </div>
  );
}
