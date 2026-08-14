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
import { SidebarCopyright } from "./copyright";
import { LoginPromo } from "./login-promo";
import { SidebarNav } from "./navigation";
import { SettingsBar } from "./settings-bar";
import { SubscriptionsList } from "./subscriptions-list";

export function AppSidebar() {
  const authUser = useAuthStore((store) => store.currentUser);
  const userName = authUser?.name;
  const { data: user, isLoading } = useUserByUsername(userName);
  const isCollapsed = useSidebarCollapsed();

  const isAuthenticated = useAuthStore((s) => Boolean(s.accessToken));

  if (isLoading) return <div>Loading...</div>; // Skeleton

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className="surface sticky top-4 h-[calc(100vh-2rem)]"
    >
      <SidebarHeader className="mb-3 flex gap-3 border-b">
        {isAuthenticated ? (
          <SidebarAccountPanel isCollapsed={isCollapsed} user={user} />
        ) : null}
      </SidebarHeader>

      <SidebarContent className="gap-5">
        {isAuthenticated ? (
          <>
            <SidebarNav isCollapsed={isCollapsed} userName={userName} />
            <SubscriptionsList isCollapsed={isCollapsed} />
          </>
        ) : (
          <LoginPromo />
        )}
      </SidebarContent>

      <SidebarFooter className="overflow-hidden">
        {isAuthenticated ? (
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
        ) : (
          <SidebarCopyright />
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
