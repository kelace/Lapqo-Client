import { Link } from "react-router-dom";
import { useGetSubscribes } from "@/entities/subscription/model/useGetSubscribes";
import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/shadcn/lib/utils";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/shared/shadcn/ui/sidebar";

type Props = {
  isCollapsed: boolean;
};

// а це може бути features ?
export function SubscriptionsList({ isCollapsed }: Props) {
  const { data: subscriptions, isLoading } = useGetSubscribes();

  if (isLoading) return null; // або Skeleton

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[11px] font-medium tracking-wide uppercase">
        Your subscriptions
      </SidebarGroupLabel>

      <SidebarMenu className="flex flex-col gap-2">
        {subscriptions?.map((sub) => (
          <SidebarMenuItem
            key={sub.id}
            className="flex items-center justify-center border p-2"
          >
            <Link
              to={routes.users.detail(sub.userName)}
              className={cn(
                "flex items-center gap-2",
                "w-full",
                "rounded-lg",
                isCollapsed ? "justify-center" : "justify-start",
              )}
            >
              <Avatar>
                <AvatarFallback>{sub.namePreview}</AvatarFallback>
              </Avatar>

              {!isCollapsed && <span>{sub.userName}</span>}
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
