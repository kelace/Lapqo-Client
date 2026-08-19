import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/widgets/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/shadcn/ui/sidebar";
import { ScrollToTop } from "@/shared/ui/scroll-to-top/ScrollToTop";
import { Header } from "../ui/header/header";
import { ProfileSidebarSlot } from "../ui/profile-sidebar-slot/profile-sidebar-slot";

// export function RootLayout() {
//   return (
//     <div className="h-screen w-full overflow-y-auto pt-16">
//       <header className="fixed inset-x-0 top-0 z-50 h-16 bg-black">
//         header
//       </header>

//       <SidebarProvider>
//         <div className="mx-auto flex min-h-screen w-full max-w-7xl">
//           <AppSidebar />

//           <SidebarInset className="flex min-h-screen flex-1 flex-col px-5">
//             <SidebarTrigger className="lg:hidden" />

//             <Outlet />
//           </SidebarInset>

//           <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-20 bg-linear-to-t from-(--feed-fade) via-(--feed-fade-strong) to-transparent" />

//           <ProfileSidebarSlot />
//         </div>
//       </SidebarProvider>
//     </div>
//   );
// }

export function RootLayout() {
  return (
    <div className="min-h-screen">
      {/* Fixed header */}
      <Header />
      {/* Основна область під header */}
      <div className="pt-20">
        <SidebarProvider>
          <div className="mx-auto flex h-full w-full max-w-7xl px-5">
            {/* Лівий сайдбар */}
            <AppSidebar />

            {/* Основний контент — ось тут має бути скрол */}
            <SidebarInset className="flex min-h-screen flex-1 flex-col px-5">
              <SidebarTrigger className="lg:hidden" />
              <Outlet />
            </SidebarInset>

            {/* Правий сайдбар */}
            <ProfileSidebarSlot />
          </div>
        </SidebarProvider>
      </div>

      {/* Градієнт внизу (якщо потрібен) */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-20 bg-linear-to-t from-(--feed-fade) via-(--feed-fade-strong) to-transparent" />
    </div>
  );
}
