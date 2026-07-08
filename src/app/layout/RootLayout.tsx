import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/widgets/app-sidebar/AppSidebar";
import { DetailsPanel } from "@/widgets/details-panel/DetailsPanel";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/shadcn/ui/sidebar";

export function RootLayout() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <SidebarProvider>
        <div className="mx-auto flex w-full max-w-7xl">
          <AppSidebar />

          <SidebarInset className="flex flex-1 flex-col p-3">
            <SidebarTrigger className="lg:hidden" />
            <Outlet />
          </SidebarInset>

          <DetailsPanel />
        </div>
      </SidebarProvider>
    </div>
  );
}
