import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  Sidebar,
  useSidebar,
} from "@/shared/shadcn/ui/sidebar";
import { SettingsBar } from "./ui/SettingsBar";
import { SideLinks } from "./ui/SideLinks";
import { cn } from "@/shared/shadcn/lib/utils";
import { UserBlock } from "./ui/UserBlock";
import { Channels } from "./ui/Channels";
import { useUser } from "@/components/entities/user/model/useUser";
import { useCurrentUser } from "@/components/entities/user/model/useCurrentUser";

export function AppSidebar() {
  const { data: me } = useCurrentUser();
  const { data: user } = useUser(me);
  const { state, isMobile } = useSidebar();
  const isDesktopCollapsed = state === "collapsed";
  const isCollapsed = isDesktopCollapsed && !isMobile;

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      // style={{ position: "sticky" }}
      className="bg-sidebar sticky border"
    >
      <SidebarHeader className="mb-3 flex gap-3 border-b">
        <UserBlock isCollapsed={isCollapsed} user={user} />
      </SidebarHeader>

      <SidebarContent className="gap-5">
        <SideLinks isCollapsed={isCollapsed} userName={me} />
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
