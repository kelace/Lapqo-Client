import { Link } from "react-router-dom";
import { cn } from "@/shared/shadcn/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";
import { getUserProfileRoute } from "../lib/getUserProfileRoute";
import { SettingsBar } from "./SettingsBar";

type Props = {
  user?: {
    namePreview?: string;
    userName?: string;
  };
  isCollapsed: boolean;
};

export function SidebarAccountPanel({ user, isCollapsed }: Props) {
  return (
    <div
      className={cn(
        "flex items-center",
        "w-full",
        isCollapsed ? "justify-center" : "justify-between",
      )}
    >
      <Link
        to={getUserProfileRoute(user?.userName)}
        className={cn(
          "flex items-center",
          isCollapsed ? "justify-center" : "gap-3",
        )}
      >
        <Avatar className="h-10 w-10">
          <AvatarImage src={undefined} />
          <AvatarFallback>{user ? user.namePreview : "?"}</AvatarFallback>
        </Avatar>

        {!isCollapsed && (
          <div className="min-w-0">
            <p className="truncate text-[14px] font-medium uppercase">
              {user?.userName}
            </p>
          </div>
        )}
      </Link>

      {!isCollapsed && <SettingsBar />}
    </div>
  );
}
