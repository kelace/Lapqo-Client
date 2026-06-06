import { RightSidebar } from "@/components/organisms/right-sidebar/RightSidebar";
import { Sidebar } from "@/components/organisms/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="mx-auto flex h-screen w-full max-w-300 gap-4 py-10">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
      <RightSidebar />
    </div>
  );
}
