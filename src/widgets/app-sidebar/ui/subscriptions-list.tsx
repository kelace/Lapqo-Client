import { Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useSubscribes } from "@/entities/subscribe";
import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/shadcn/lib/utils";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/shared/shadcn/ui/sidebar";
import { Skeleton } from "@/shared/shadcn/ui/skeleton";

type Props = {
  isCollapsed: boolean;
};

export function SubscriptionsList({ isCollapsed }: Props) {
  const { data: subscriptions, isLoading } = useSubscribes();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="mb-4 bg-gray-500 text-[11px] font-medium tracking-wide uppercase">
        <Users /> <span className="truncate pl-2">Your subscriptions</span>
      </SidebarGroupLabel>

      {isLoading && !isCollapsed && (
        <SidebarMenu className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, index) => (
            <SidebarMenuItem key={index}>
              <div className="flex items-center gap-2 p-2">
                <Skeleton className="size-8 rounded-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      )}

      {!isLoading && subscriptions?.length === 0 && !isCollapsed && (
        <div className="text-muted-foreground text-center text-sm">
          No subscriptions
        </div>
      )}

      {!!subscriptions?.length && (
        <SidebarMenu className="flex flex-col gap-2">
          {subscriptions.map((sub) => (
            <SidebarMenuItem
              key={sub.id}
              className="flex items-center justify-center"
            >
              <NavLink
                to={routes.users.detail(sub.userName)}
                className={({ isActive }) =>
                  cn(
                    "flex w-full items-center gap-2 rounded-lg p-2 transition-colors",
                    isCollapsed ? "justify-center" : "justify-start",
                    isActive
                      ? "bg-accent text-white"
                      : "hover:bg-hover hover:text-white",
                  )
                }
              >
                <Avatar className="size-8">
                  <AvatarFallback>{sub.namePreview}</AvatarFallback>
                </Avatar>
                {!isCollapsed && (
                  <span className="truncate">{sub.userName}</span>
                )}
              </NavLink>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      )}
    </SidebarGroup>
  );
}
