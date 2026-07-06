import { useAuthStore } from "@/app/store/auth";
import { useUser } from "@/entities/user/model/useUser";
import { cn } from "@/shared/shadcn/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "@/shared/shadcn/ui/sidebar";
import { Channels } from "./ui/Channels";
import { SettingsBar } from "./ui/SettingsBar";
import { SideLinks } from "./ui/SideLinks";
import { UserBlock } from "./ui/UserBlock";

export function AppSidebar() {
  const currentUser = useAuthStore((store) => store.currentUser);
  const { data: user } = useUser(currentUser?.name);
  const { state, isMobile } = useSidebar();
  const isDesktopCollapsed = state === "collapsed";
  const isCollapsed = isDesktopCollapsed && !isMobile;

  return (
    <Sidebar collapsible="icon" variant="sidebar" className="sticky">
      <SidebarHeader className="mb-3 flex gap-3 border-b">
        <UserBlock isCollapsed={isCollapsed} user={user} />
      </SidebarHeader>

      <SidebarContent className="gap-5">
        <SideLinks isCollapsed={isCollapsed} userName={currentUser?.name} />
        <Channels />
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
          <SettingsBar className="flex-col" isCollapsed={isCollapsed} />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
