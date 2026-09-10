import { Outlet } from "react-router-dom";
import { SearchFeedDialog } from "@/features/search-feed/ui/SearchFeedDialog";
import { SearchUserPosts } from "@/features/search-user-posts/ui/search-user-posts";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/shared/shadcn/ui/sidebar";
import { Header } from "../../../widgets/header/header";
import { AppSidebar } from "../../../widgets/left-sidebar";
import { ProfileSidebar } from "../../../widgets/right-sidebar/profile-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";
import { useEffect, useRef } from "react";

export function RootLayout() {
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() =>{
    // const offsetTop = ref.current?.offsetTop;
    if(ref.current){
      const bcr = ref.current?.getBoundingClientRect();
      // ref.current.style.height = `calc(100% - ${offsetTop}px)`;
      ref.current.style.height = `calc(100% - ${bcr.y}px)`;
    }
  }, []);

  return (
    <div className="min-h-screen">
      <SidebarProvider>
        <div className="flex min-h-screen w-full justify-between">
          <AppSidebar />
          <div className="w-full h-[100vh]">
            <Header />
            <div className="flex h-[100%]">
              <SidebarInset className="flex min-h-screen w-full flex-1 flex-col">
                <div className="p-3 bg-sidebar flex justify-between">
                  <Avatar>
                    {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <SearchFeedDialog />
                </div>
                <div className="h-[100%] overflow-auto" ref={ref}>
                  <div className="mx-auto mt-10 max-w-[700px] pb-[50px]">
                    <Outlet />
                  </div>
                </div>
              </SidebarInset>
              {/* <SidebarTrigger /> */}
              <ProfileSidebar className="z-10 hidden h-[calc(100vh-8rem)] min-w-80 xl:block" />
            </div>
          </div>
        </div>
      </SidebarProvider>

      {/* <div className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-20 bg-linear-to-t from-(--feed-fade) via-(--feed-fade-strong) to-transparent" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-30 bg-linear-to-b from-(--feed-fade) via-(--feed-fade-strong) to-transparent" /> */}
    </div>
  );
}
