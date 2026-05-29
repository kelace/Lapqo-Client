import { useAuthStore } from "@/app/store/auth";
import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SettingsBar() {
  const { theme, setTheme } = useTheme();
  const logout = useAuthStore((state) => state.logout);

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
        className="cursor-pointer hover:text-red-500"
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Sun size={14} /> : <Moon size={14} />}
      </button>

      <Settings size={14} />

      <button
        type="button"
        onClick={logout}
        className="cursor-pointer hover:text-red-500"
        aria-label="Logout"
      >
        <LogOut size={14} />
      </button>
    </div>
  );
}
