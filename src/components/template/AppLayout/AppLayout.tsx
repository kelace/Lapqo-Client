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
    <div className="flex min-h-screen justify-center border">
      <div className="h-screen w-full max-w-7xl">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1 px-4">
            <SidebarTrigger className="lg:hidden" />
            <Outlet />
          </SidebarInset>
          <div className="hidden w-[300px] shrink-0 lg:block">
            <RightSidebar />
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
