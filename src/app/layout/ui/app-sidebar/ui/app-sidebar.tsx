import { useAuthStore } from "@/shared/stores/auth";
import { cn } from "@/shared/shadcn/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/shared/shadcn/ui/sidebar";
import { useSidebarCollapsed } from "../lib/use-sidebar-collapsed";
import { SidebarAccount } from "./sidebar-account/sidebar-account";
import { SidebarBody } from "./sidebar-body/sidebar-body";

type Props = {
  className?: string;
};

export function AppSidebar({ className }: Props) {
  const authUser = useAuthStore((store) => store.currentUser);
  const userName = authUser?.name;
  const isCollapsed = useSidebarCollapsed();
  const isAuthenticated = useAuthStore((s) => s.isUserAuthenticated());

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className={cn("surface overflow-y-auto", className)}
    >
      <SidebarHeader className="mb-3">
        <SidebarAccount
          isAuthenticated={isAuthenticated}
          isCollapsed={isCollapsed}
          userName={userName}
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarBody
          isAuthenticated={isAuthenticated}
          isCollapsed={isCollapsed}
          userName={userName}
        />
      </SidebarContent>
    </Sidebar>
  );
}
