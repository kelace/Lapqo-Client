import { LogoutButton } from "@/features/auth/ui/logout-button";
import { cn } from "@/shared/shadcn/lib/utils";
import { ThemeButton } from "@/shared/ui/theme-button/theme-button";

type Props = {
  orientation?: "horizontal" | "vertical";
};

export function SettingsBar({ orientation = "horizontal" }: Props) {
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-lg p-1",
        orientation === "vertical" ? "flex-col" : "flex-row",
      )}
    >
      <ThemeButton />
      <LogoutButton />
    </div>
  );
}
