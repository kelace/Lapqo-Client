import { useAuthStore } from "@/app/store/auth";
import { useUserByUsername } from "@/entities/user/model/use-user-by-username";
import { cn } from "@/shared/shadcn/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/shared/shadcn/ui/sidebar";
import { useSidebarCollapsed } from "../lib/use-sidebar-collapsed";
import { SidebarAccountPanel } from "./account-panel";
import { SidebarNav } from "./navigation";
import { SettingsBar } from "./settings-bar";
import { SubscriptionsList } from "./subscriptions-list";

export function AppSidebar() {
  const authUser = useAuthStore((store) => store.currentUser);
  const userName = authUser?.name;
  const { data: user } = useUserByUsername(userName);
  const isCollapsed = useSidebarCollapsed();

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="sticky">
      <SidebarHeader className="mb-3 flex gap-3 border-b">
        <SidebarAccountPanel isCollapsed={isCollapsed} user={user} />
      </SidebarHeader>

      <SidebarContent className="gap-5">
        <SidebarNav isCollapsed={isCollapsed} userName={userName} />
        <SubscriptionsList isCollapsed={isCollapsed} />
      </SidebarContent>

      <SidebarFooter className="overflow-hidden">
        <div
          className={cn(
            "transition-all duration-300 ease-out",
            isCollapsed
              ? "translate-y-0 scale-100 opacity-100 delay-300 duration-300"
              : "translate-y-full scale-95 opacity-0 duration-0",
          )}
        >
          <SettingsBar orientation="vertical" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
