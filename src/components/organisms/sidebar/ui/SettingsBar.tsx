import { useAuthStore } from "@/app/store/auth";
import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function SettingsBar() {
  const { theme, setTheme } = useTheme();
  const logout = useAuthStore((state) => state.logout);

  const isDark = theme === "dark";

  const buttons = (
    isDark: boolean,
    setTheme: (theme: string) => void,
    logout: () => void,
  ) => [
    {
      label: "Toggle theme",
      icon: isDark ? Moon : Sun,
      onClick: () => setTheme(isDark ? "light" : "dark"),
    },
    {
      label: "Settings",
      icon: Settings,
    },
    {
      label: "Logout",
      icon: LogOut,
      onClick: logout,
      danger: true,
    },
  ];

  const items = buttons(isDark, setTheme, logout);

  return (
    <div
      className="
        flex items-center gap-1.5
        bg-[#191837]
        rounded-lg px-2 py-1.5
        text-[#fafafa]
      "
    >
      {/* Theme toggle */}

      {items.map((btn) => {
        const Icon = btn.icon;

        return (
          <button
            key={btn.label}
            className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white/10 hover:text-white cursor-pointer transition-colors duration-200"
            onClick={btn.onClick}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
}
