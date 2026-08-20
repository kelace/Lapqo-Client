import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/shared/shadcn/ui/sidebar";
import { AppSidebar } from "../ui/app-sidebar";
import { Header } from "../ui/header/header";
import { ProfileSidebar } from "../ui/profile-sidebar/profile-sidebar";

export function RootLayout() {
  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <Header />

        <div className="mx-auto flex min-h-screen w-full max-w-7xl px-5">
          <AppSidebar className="sticky top-20 h-[calc(100vh-8rem)]" />

          <SidebarInset className="flex min-h-screen w-full flex-1 flex-col pt-20 sm:px-5">
            <Outlet />
          </SidebarInset>

          <ProfileSidebar className="sticky top-20 z-10 hidden h-[calc(100vh-8rem)] min-w-80 xl:block" />
        </div>
      </SidebarProvider>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-20 bg-linear-to-t from-(--feed-fade) via-(--feed-fade-strong) to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-30 bg-linear-to-b from-(--feed-fade) via-(--feed-fade-strong) to-transparent" />
    </div>
  );
}
