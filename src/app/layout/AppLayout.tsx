import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/widgets/app-sidebar/AppSidebar";
import { RightSidebar } from "@/widgets/right-sidebar/RightSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/shadcn/ui/sidebar";

export function AppLayout() {
  return (
    <div className="flex min-h-screen justify-center">
      <div className="flex h-screen w-full max-w-7xl">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex h-full flex-1 flex-col p-3">
            <SidebarTrigger className="lg:hidden" />
            <div className="h-full flex-1 overflow-hidden">
              <Outlet />
            </div>
          </SidebarInset>
          <RightSidebar />
        </SidebarProvider>
      </div>
    </div>
  );
}
