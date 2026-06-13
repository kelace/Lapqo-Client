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
      <div className="h-screen w-full max-w-7xl">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex-1 px-4">
            <SidebarTrigger className="lg:hidden" />
            <Outlet />
          </SidebarInset>
          <RightSidebar />
        </SidebarProvider>
      </div>
    </div>
  );
}
