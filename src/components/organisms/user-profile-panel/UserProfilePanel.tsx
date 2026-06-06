import { Bell, Edit } from "lucide-react";
import { useUser } from "@/shared/hooks/query/useUser";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "@/shared/shadcn/ui/avatar";

export function UserProfilePanel({ userName }: { userName?: string }) {
  // const { userName } = useProfileUser();
  const { data: user } = useUser(userName);

  return (
    <aside className="sticky top-0 h-screen w-[320px]">
      <div className="border-border-gray bg-sidebar mx-auto h-screen max-w-5xl rounded-lg border p-6">
        <div className="border-border-gray flex flex-col gap-6 border-b p-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <Avatar className="size-35">
              {/* <AvatarImage src={user?.avatarUrl ?? undefined} /> */}
              <AvatarFallback className="text-2xl">{user?.namePreview}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold uppercase">{user?.userName}</h1>
            <p className="text-muted-foreground mt-1 text-sm">Followers {user?.subscribersCount}</p>
          </div>

          <div className="flex items-start justify-center gap-4">
            <div className="flex justify-center gap-1.5">
              <button className="bg-primary flex min-w-30 cursor-pointer items-center justify-center gap-1 rounded-lg px-4 py-2 text-[14px] font-medium text-white">
                <Bell size={13} /> {user?.isSubscribed ? "Following" : "Follow"}
              </button>
              <button className="flex min-w-30 cursor-pointer items-center justify-center gap-1 rounded-lg border border-gray-400/20 px-4 py-2 text-[14px]">
                <Edit size={13} /> Write
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
