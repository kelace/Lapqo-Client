import { RightSidebar } from "@/components/widgets/right-sidebar/RightSidebar";
import { Outlet } from "react-router-dom";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/shared/shadcn/ui/sidebar";
import { AppSidebar } from "@/components/widgets/app-sidebar/AppSidebar";

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
