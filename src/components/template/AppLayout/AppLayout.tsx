import { RightSidebar } from "@/components/organisms/right-sidebar/RightSidebar";
import { Sidebar as SidebarMy } from "@/components/organisms/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/shared/shadcn/ui/sidebar";
import { AppSidebar } from "@/components/organisms/app-sidebar/AppSidebar";

export function AppLayout() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="h-screen w-full max-w-7xl overflow-hidden">
        <SidebarProvider className="gap-4">
          <AppSidebar />
          {/* <SidebarMy /> */}
          <SidebarInset className="flex-1 overflow-y-auto">
            <SidebarTrigger />
            <Outlet />
          </SidebarInset>
          <RightSidebar />
        </SidebarProvider>
      </div>
    </div>
  );
}
