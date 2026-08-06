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
import { 
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
 } from "@/shared/shadcn/ui/item";

type Props = {
  isCollapsed: boolean;
};

export function SubscriptionsList({ isCollapsed }: Props) {
  const { data: subscriptions, isLoading } = useSubscribes();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="mb-4 bg-muted text-[11px] font-medium tracking-wide uppercase">
        <Users /> <span className="truncate pl-2">Your subscriptions</span>
      </SidebarGroupLabel>

      {isLoading && <div>Loading...</div>}
      {!isLoading && subscriptions?.length === 0 && (
        <div className="text-muted-foreground text-center text-sm">
          No subscriptions
        </div>
      )}

      <SidebarMenu className="flex flex-col gap-2">
        {subscriptions?.map((sub) => (
          <SidebarMenuItem
            key={sub.id}
            className="2 flex items-center justify-center"
          >
            <NavLink
              to={routes.users.detail(sub.userName)}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2",
                  "w-full",
                  "rounded-lg",
                  isCollapsed ? "justify-center" : "justify-start",
                  isActive
                    ? "bg-accent text-white"
                    : "text hover:bg-hover hover:text-white",
                )
              }
            >
              <Item>
                <ItemMedia>
                  <Avatar>
                    <AvatarFallback>{sub.namePreview}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{!isCollapsed && <span>{sub.userName}</span>}</ItemTitle>
                  <ItemDescription>{!isCollapsed && <span>{sub.previewContent}</span>}</ItemDescription>
                </ItemContent>
              </Item>
            </NavLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
