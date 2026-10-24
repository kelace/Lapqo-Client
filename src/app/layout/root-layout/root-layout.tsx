import { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { SearchFeedDialog } from "@/features/search-feed/ui/SearchFeedDialog";
import { useAuthenticatedProfile, useUserByUsername } from "@/entities/user";
import { Avatar, AvatarFallback } from "@/shared/shadcn/ui/avatar";
import { SidebarProvider, useSidebar } from "@/shared/shadcn/ui/sidebar";
import { Header } from "../../../widgets/header/header";
import { AppSidebar } from "../../../widgets/left-sidebar";
import { ProfileSidebar } from "../../../widgets/right-sidebar/profile-sidebar";

export function RootLayout() {
  let ref = useRef<HTMLDivElement>(null);

  const { profileUserName } = useAuthenticatedProfile();
  const { data: user } = useUserByUsername(profileUserName);

  useEffect(() => {
    function resize() {
      if (ref.current) {
        const bcr = ref.current?.getBoundingClientRect();
        ref.current.style.height = `calc(100% - ${bcr.y}px)`;
      }
    }

    resize();

    window.addEventListener("resize", resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <div className="flex min-h-screen w-full justify-between">
          <AppSidebar />
          <div className="w-full h-[100vh]">
            <Header />
            <SidebarProvider className="h-[100%]">
              <div className="flex h-[100%] w-full">
                <div className="flex min-h-screen w-full flex-1 flex-col">
                  <div className="p-3 bg-sidebar flex justify-between">
                    {user ? (
                      <ProfileIcon
                        userNamePreview={user?.namePreview}
                        userName={user?.userName}
                      />
                    ) : null}
                    <SearchFeedDialog />
                  </div>
                  <div className="h-[100%] overflow-auto" ref={ref}>
                    <div className="mx-auto mt-10 max-w-[700px] pb-[50px]">
                      <Outlet />
                    </div>
                  </div>
                </div>
                <ProfileSidebar />
              </div>
            </SidebarProvider>
          </div>
        </div>
      </SidebarProvider>

      {/* <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-20 bg-linear-to-t from-(--feed-fade) via-(--feed-fade-strong) to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-30 bg-linear-to-b from-(--feed-fade) via-(--feed-fade-strong) to-transparent" /> */}
    </div>
  );
}

type ProfileIconProps = {
  userNamePreview: string;
  userName: string;
};

function ProfileIcon({ userNamePreview, userName }: ProfileIconProps) {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-30 flex items-center">
      <Avatar onClick={toggleSidebar}>
        <AvatarFallback>{userNamePreview}</AvatarFallback>
      </Avatar>
      <span className="ml-3">{userName}</span>
    </div>
  );
}
