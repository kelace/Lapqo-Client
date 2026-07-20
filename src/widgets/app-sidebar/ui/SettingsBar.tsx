import { LogoutButton } from "@/features/auth/ui/LogoutButton";
import { cn } from "@/shared/shadcn/lib/utils";
import { ThemeButton } from "@/shared/ui/ThemeButton/ThemeButton";

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
