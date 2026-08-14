import { Outlet } from "react-router-dom"; //256 react-router
import { AppSidebar } from "@/widgets/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/shadcn/ui/sidebar";
import { ProfileSidebarSlot } from "../profile-sidebar-slot/profile-sidebar-slot";

export function RootLayout() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <SidebarProvider>
        <div className="mx-auto flex w-full max-w-7xl">
          <AppSidebar />

          <SidebarInset className="flex min-w-0 flex-1 flex-col px-5 py-5">
            <SidebarTrigger className="lg:hidden" />
            <Outlet />
          </SidebarInset>

          <ProfileSidebarSlot />
        </div>
      </SidebarProvider>
    </div>
  );
}
