import { useAuthStore } from "@/app/store/auth";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/shared/shadcn/ui/sidebar";
import { useSidebarCollapsed } from "../lib/use-sidebar-collapsed";
import { SidebarAccount } from "./sidebar-account/sidebar-account";
import { SidebarBody } from "./sidebar-body/sidebar-body";

export function AppSidebar() {
  const authUser = useAuthStore((store) => store.currentUser);
  const userName = authUser?.name;
  const isCollapsed = useSidebarCollapsed();
  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="surface sticky top-20 h-[calc(100vh-8rem)] overflow-y-auto"
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
