import { Sidebar } from "@/components/organisms/sidebar/Sidebar";
import { UserProfilePanel } from "@/components/organisms/user-profile-panel/UserProfilePanel";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex w-full h-screen mx-auto max-w-300 py-10 gap-4">
      <Sidebar />
      <main className="flex-1 overflow-y-auto ">
        <Outlet />
      </main>
      <UserProfilePanel />
    </div>
  );
}
