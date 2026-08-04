import { Outlet } from "react-router-dom"; //256 react-router
import { AppSidebar } from "@/widgets/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/shadcn/ui/sidebar";
import { ProfileSidebarSlot } from "../profile-sidebar-slot/profile-sidebar-slot";
import { Header } from "@/widgets/header/ui/header";

export function RootLayout() {
  return (
    <div className="h-screen w-full overflow-y-auto">
      <Header/>
      <SidebarProvider>
        <div className="mx-auto flex w-full max-w-7xl mt-5">
          <AppSidebar />

          <SidebarInset className="flex min-w-0 flex-1 flex-col p-3">
            <SidebarTrigger className="lg:hidden" />
            <Outlet />
          </SidebarInset>

          <ProfileSidebarSlot />
        </div>
      </SidebarProvider>
    </div>
  );
}
