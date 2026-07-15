import { Link } from "react-router-dom";
import { useGetSubscribes } from "@/entities/user/model/useGetSubscribes";
import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/shadcn/lib/utils";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/shared/shadcn/ui/sidebar";

export function Subscriptions() {
  const { data: subscriptions, isLoading } = useGetSubscribes();
  const { state } = useSidebar();

  const isCollapsed = state === "collapsed";

  if (isLoading) {
    return null; // або Skeleton
  }

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-[11px] font-medium tracking-wide uppercase">
        Your subscriptions
      </SidebarGroupLabel>

      <SidebarMenu className="flex flex-col gap-2">
        {subscriptions?.map((sub) => (
          <SidebarMenuItem
            className="flex items-center justify-center border p-2"
            key={sub.id}
          >
            <Link
              to={routes.users.detail(sub.userName)}
              className={cn(
                "flex w-full items-center gap-2 rounded-lg",
                isCollapsed ? "justify-center" : "justify-start",
              )}
            >
              <Avatar>
                {/* <AvatarImage src={undefined} /> */}
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
