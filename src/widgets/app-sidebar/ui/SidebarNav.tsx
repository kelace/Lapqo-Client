import { Rss, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/shared/shadcn/lib/utils";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/shared/shadcn/ui/sidebar";
import { getUserProfileRoute } from "../lib/getUserProfileRoute";

type Props = {
  isCollapsed: boolean;
  userName?: string;
};

export function SidebarNav({ isCollapsed, userName }: Props) {
  const links = [
    { to: getUserProfileRoute(userName), label: "Profile", icon: User },
    { to: "/feed", label: "Feed", icon: Rss },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="uppercase">Navigation</SidebarGroupLabel>

      <SidebarMenu className="flex flex-col gap-1">
        {links.map(({ to, label, icon: Icon }) => (
          <SidebarMenuItem key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                cn(
                  "flex w-full cursor-pointer items-center rounded-lg border px-2 py-2 transition-colors",
                  isCollapsed ? "justify-center" : "justify-start gap-2",
                  isActive
                    ? "bg-accent text-white"
                    : "text hover:bg-hover hover:text-white",
                )
              }
            >
              <Icon className="size-5 shrink-0" />
              {!isCollapsed && <span className="truncate">{label}</span>}
            </NavLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
