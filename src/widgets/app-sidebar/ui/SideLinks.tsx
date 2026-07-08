import { Rss, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/shadcn/lib/utils";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/shared/shadcn/ui/sidebar";

type Props = {
  isCollapsed: boolean;
  userName?: string;
};

export function SideLinks({ isCollapsed, userName }: Props) {
  const links = [
    {
      to: userName ? routes.users.detail(userName) : routes.login,
      label: "Profile",
      icon: User,
    },
    { to: "/feed", label: "Feed", icon: Rss },
  ];

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="uppercase">Navigation</SidebarGroupLabel>

      <SidebarMenu className="flex flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <SidebarMenuItem key={link.to}>
              <NavLink to={link.to} className="block">
                {({ isActive }) => (
                  <button
                    type="button"
                    className={cn(
                      "flex w-full cursor-pointer items-center rounded-lg border px-2 py-2 transition-colors",
                      isCollapsed ? "justify-center" : "justify-start gap-2",

                      isActive
                        ? "bg-accent text-white"
                        : "text hover:bg-hover hover:text-white",
                    )}
                  >
                    <Icon className="size-5 shrink-0" />

                    {!isCollapsed && (
                      <span className="truncate">{link.label}</span>
                    )}
                  </button>
                )}
              </NavLink>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
