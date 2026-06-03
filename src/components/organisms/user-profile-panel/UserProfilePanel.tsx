import { useUser } from "@/shared/hooks/query/useUser";
import { useProfileUser } from "@/shared/hooks/useProfileUser";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/shared/ui/avatar";

import { Bell, Edit } from "lucide-react";

export function UserProfilePanel() {
  const { userName } = useProfileUser();
  const { data: user } = useUser(userName);

  return (
    <aside className="sticky top-0 h-screen w-[320px]">
      <div className="max-w-5xl mx-auto p-6 bg-[#0d1426] border border-gray-400/20 rounded-lg h-screen">
        <div className="flex flex-col gap-6 p-6 border-b border-gray-400/20">
          <div className="flex flex-col items-center justify-center gap-4 ">
            <Avatar className="size-35 ">
              {/* <AvatarImage src={user?.avatarUrl ?? undefined} /> */}
              <AvatarFallback className="text-2xl">
                {user?.namePreview}
              </AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold uppercase">{user?.userName}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Followers {user?.subscribersCount}
            </p>
          </div>

          <div className="flex items-start justify-center gap-4 ">
            <div className="flex gap-1.5 justify-center">
              <button className="flex min-w-30 items-center justify-center gap-1 text-[14px] px-4 py-2 rounded-lg bg-[#5d2ac3] text-white font-medium  cursor-pointer">
                <Bell size={13} /> {user?.isSubscribed ? "Following" : "Follow"}
              </button>
              <button className="flex min-w-30 items-center justify-center gap-1 text-[14px] px-4 py-2 rounded-lg border border-gray-400/20  cursor-pointer">
                <Edit size={13} /> Write
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
