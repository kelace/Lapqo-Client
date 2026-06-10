import { cn } from "@/shared/shadcn/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";
import { SettingsBar } from "./SettingsBar";

type UserBlockProps = {
  user?: {
    namePreview?: string;
    userName?: string;
  };
  isCollapsed: boolean;
};

export function UserBlock({ user, isCollapsed }: UserBlockProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center",
        isCollapsed ? "justify-center" : "justify-between",
      )}
    >
      <div
        className={cn(
          "flex items-center",
          isCollapsed ? "justify-center" : "gap-3",
        )}
      >
        <Avatar className="h-10 w-10">
          <AvatarImage src={undefined} />
          <AvatarFallback>{user?.namePreview}</AvatarFallback>
        </Avatar>

        {!isCollapsed && (
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium uppercase">
              {user?.userName}
            </p>
            <p className="text-muted-foreground text-[12px]">
              @{user?.userName}
            </p>
          </div>
        )}
      </div>

      {!isCollapsed && <SettingsBar isCollapsed={isCollapsed} />}
    </div>
  );
}
