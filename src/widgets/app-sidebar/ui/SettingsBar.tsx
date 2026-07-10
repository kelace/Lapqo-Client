import { LogOut, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useAuthStore } from "@/app/store/auth";
import { useRequireAuth } from "@/shared/hooks/auth/use-require-auth";
import { cn } from "@/shared/shadcn/lib/utils";

type Props = {
  className?: string;
};

//256
export function SettingsBar({ className }: Props) {
  const { theme, setTheme } = useTheme();
  const logout = useAuthStore((state) => state.logout);
  const { requireAuth } = useRequireAuth();

  const isDark = theme === "dark";

  const handleClick = () => requireAuth(logout);

  const items = [
    {
      label: "Toggle theme",
      icon: isDark ? Moon : Sun,
      onClick: () => setTheme(isDark ? "light" : "dark"),
    },
    {
      label: "Logout",
      icon: LogOut,
      onClick: handleClick,
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
            )}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
}
