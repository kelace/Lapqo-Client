import { useAuthStore } from "@/app/store/auth";
import { cn } from "@/shared/shadcn/lib/utils";
import { LogOut, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
  isCollapsed?: boolean;
};

export function SettingsBar({ className, isCollapsed = true }: Props) {
  const { theme, setTheme } = useTheme();
  const logout = useAuthStore((state) => state.logout);

  const isDark = theme === "dark";

  const items = [
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

  return (
    <div className={cn("flex items-center gap-1 rounded-lg p-1", className)}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.label}
            title={item.label}
            onClick={item.onClick}
            className={cn(
              "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border transition-colors",
              "hover:bg-accent hover:text-white",

              // item.danger && "text-white hover:bg-white hover:text-black",
            )}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
}
